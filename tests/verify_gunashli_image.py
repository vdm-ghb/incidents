import functools
import http.server
import socket
import tempfile
import threading
from pathlib import Path

from playwright.sync_api import sync_playwright


REPO_ROOT = Path(__file__).resolve().parents[1]
IMAGE_PATH = "images/gunashli-2015-platform-azernews.jpg"


class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, format_string, *args):
        pass


def get_free_port():
    with socket.socket() as probe:
        probe.bind(("127.0.0.1", 0))
        return probe.getsockname()[1]


def assert_horizontally_inside(inner_box, outer_box):
    assert inner_box["x"] >= outer_box["x"]
    assert inner_box["x"] + inner_box["width"] <= outer_box["x"] + outer_box["width"] + 1


def assert_inside(inner_box, outer_box):
    assert_horizontally_inside(inner_box, outer_box)
    assert inner_box["y"] >= outer_box["y"]
    assert inner_box["y"] + inner_box["height"] <= outer_box["y"] + outer_box["height"] + 1


def verify_all_local_images(page):
    image_paths = sorted(
        f"images/{path.name}"
        for path in (REPO_ROOT / "images").iterdir()
        if path.is_file()
    )
    results = page.evaluate(
        """paths => Promise.all(paths.map(path => new Promise(resolve => {
            const image = new Image();
            image.onload = () => resolve({
                path,
                width: image.naturalWidth,
                height: image.naturalHeight
            });
            image.onerror = () => resolve({path, width: 0, height: 0});
            image.src = path;
        })))""",
        image_paths,
    )
    failures = [result for result in results if not result["width"] or not result["height"]]
    assert not failures, f"Local images failed to decode: {failures}"
    return len(results)


def verify_all_selected_images(page, base_url):
    dataset = page.evaluate(
        """(() => {
            const incidents = window.INCIDENTS_DATA.incidents;
            const selected = incidents
                .filter(incident => incident.image)
                .map(incident => ({
                    id: incident.id,
                    src: incident.image.src,
                    complete: ['src', 'alt', 'caption', 'credit']
                        .every(field => Boolean(incident.image[field]))
                }));
            return {
                count: incidents.length,
                uniqueIds: new Set(incidents.map(incident => incident.id)).size,
                selected,
                uniqueImagePaths: new Set(selected.map(incident => incident.src)).size,
                eniImage: incidents.find(incident => incident.id === 'eni-aceh-soliton').image,
                bourbonImage: incidents.find(incident => incident.id === 'bourbon-dolphin-2007').image,
                westGammaImage: incidents.find(incident => incident.id === 'west_gamma_1990').image,
                seaGem: incidents.find(incident => incident.id === 'sea-gem-1965'),
                dupalHasImage: Boolean(
                    incidents.find(incident => incident.id === 'lfe-03-dupal-lmrp-disconnect').image
                )
            };
        })()"""
    )
    selected_images = dataset["selected"]
    assert dataset["count"] == dataset["uniqueIds"]
    assert selected_images
    assert dataset["uniqueImagePaths"] <= len(selected_images)
    assert all(selected["complete"] for selected in selected_images)
    assert dataset["eniImage"]["src"] == (
        "images/eni-aceh-soliton-slide-4-rig-impact-diagram.png"
    )
    assert "does not depict the Krueng Mane event itself" in dataset["eniImage"]["caption"]
    assert dataset["bourbonImage"]["src"] == (
        "images/bourbon-dolphin-2007-capsized-response.jpg"
    )
    assert "photographer and publisher unresolved" in dataset["bourbonImage"]["credit"]
    assert dataset["westGammaImage"]["src"] == (
        "images/west-gamma-1990-listing-in-heavy-seas.webp"
    )
    assert dataset["westGammaImage"]["credit"].startswith("ESVAGT via Mynewsdesk")
    assert dataset["westGammaImage"]["credit"].endswith("Permission required.")
    assert dataset["seaGem"]["fatalities"] == 13
    assert dataset["seaGem"]["survivors"] == 19
    assert dataset["seaGem"]["weather_event_type"] == "storm"
    assert dataset["seaGem"]["metocean"]["wave_height_hs"].startswith("Less than 3 m")
    assert dataset["seaGem"]["image"]["src"] == (
        "images/sea-gem-1965-platform-figure-2.png"
    )
    assert any(
        reference.get("url", "").endswith("524-2055-1-PB.pdf")
        for reference in dataset["seaGem"]["references"]
    )
    assert not dataset["dupalHasImage"]

    for selected in selected_images:
        page.goto(
            f"{base_url}/?verify={selected['id']}#{selected['id']}",
            wait_until="domcontentloaded",
        )
        figure = page.locator(".incident-image-figure")
        figure.wait_for(state="visible")
        summary_image = figure.locator(".incident-summary-image")
        assert summary_image.get_attribute("src") == selected["src"]
        assert summary_image.evaluate(
            "image => image.complete && image.naturalWidth > 0 && image.naturalHeight > 0"
        )
        if selected["id"] == "west_gamma_1990":
            assert summary_image.evaluate(
                "image => [image.naturalWidth, image.naturalHeight]"
            ) == [1528, 859]
        if selected["id"] == "sea-gem-1965":
            assert summary_image.evaluate(
                "image => [image.naturalWidth, image.naturalHeight]"
            ) == [425, 404]
        figure.locator("button").click()
        lightbox_image = page.locator("#image-lightbox-image")
        lightbox_image.wait_for(state="visible")
        assert lightbox_image.evaluate(
            "image => image.complete && image.naturalWidth > 0 && image.naturalHeight > 0"
        )
        page.keyboard.press("Escape")

    return len(selected_images)


def verify_mobile_image(page, base_url, incident_id):
    page.goto(
        f"{base_url}/?mobile={incident_id}#{incident_id}",
        wait_until="domcontentloaded",
    )
    figure = page.locator(".incident-image-figure")
    figure.wait_for(state="visible")
    assert_horizontally_inside(
        figure.bounding_box(), page.locator("#modal-container").bounding_box()
    )
    figure.locator("button").click()
    lightbox = page.locator("#image-lightbox")
    lightbox.wait_for(state="visible")
    assert_inside(page.locator("#image-lightbox-image").bounding_box(), lightbox.bounding_box())


def run_verification():
    port = get_free_port()
    handler = functools.partial(QuietHandler, directory=str(REPO_ROOT))
    server = http.server.ThreadingHTTPServer(("127.0.0.1", port), handler)
    threading.Thread(target=server.serve_forever, daemon=True).start()
    screenshot_dir = Path(tempfile.gettempdir())

    try:
        with sync_playwright() as playwright:
            browser = playwright.chromium.launch(channel="msedge", headless=True)
            desktop = browser.new_page(viewport={"width": 1440, "height": 900})
            desktop_errors = []
            desktop.on("pageerror", lambda error: desktop_errors.append(str(error)))
            desktop.goto(f"http://127.0.0.1:{port}/", wait_until="domcontentloaded")
            desktop.wait_for_function(
                """() => {
                    const count = window.INCIDENTS_DATA?.incidents?.length;
                    const displayed = Number.parseInt(
                        document.querySelector('#stat-incidents')?.textContent ?? '', 10
                    );
                    return Number.isInteger(count) && displayed === count;
                }"""
            )

            marker = desktop.locator(
                '.leaflet-marker-icon[title="Gunashli Platform No. 10"]'
            ).first
            marker.dispatch_event("mouseover")
            thumbnail = desktop.locator(".leaflet-tooltip .tooltip-image")
            thumbnail.wait_for(state="visible")
            assert thumbnail.get_attribute("src") == IMAGE_PATH
            summary_box = desktop.locator(".leaflet-tooltip .tooltip-summary").bounding_box()
            assert thumbnail.bounding_box()["y"] > summary_box["y"] + summary_box["height"]

            west_gamma_marker = desktop.locator(
                '.leaflet-marker-icon[title="West Gamma Jack-up"]'
            ).first
            west_gamma_marker.dispatch_event("mouseover")
            west_gamma_thumbnail = desktop.locator(
                '.leaflet-tooltip .tooltip-image[src="images/west-gamma-1990-listing-in-heavy-seas.webp"]'
            )
            west_gamma_thumbnail.wait_for(state="visible")
            assert west_gamma_thumbnail.get_attribute("src") == (
                "images/west-gamma-1990-listing-in-heavy-seas.webp"
            )

            desktop.goto(
                f"http://127.0.0.1:{port}/?pilot=image#gunashli-2015",
                wait_until="domcontentloaded",
            )
            figure = desktop.locator(".incident-image-figure")
            figure.wait_for(state="visible")
            assert figure.locator("figcaption").inner_text().endswith(
                "Trend News Agency via AzerNews"
            )
            assert_horizontally_inside(
                figure.bounding_box(), desktop.locator("#modal-container").bounding_box()
            )
            desktop.screenshot(path=screenshot_dir / "gunashli-pilot-desktop-summary.png")

            figure.locator("button").click()
            lightbox = desktop.locator("#image-lightbox")
            lightbox.wait_for(state="visible")
            full_image = desktop.locator("#image-lightbox-image")
            assert full_image.evaluate("image => [image.naturalWidth, image.naturalHeight]") == [
                1200,
                673,
            ]
            assert_inside(full_image.bounding_box(), lightbox.bounding_box())
            desktop.screenshot(path=screenshot_dir / "gunashli-pilot-desktop-lightbox.png")
            desktop.keyboard.press("Escape")
            assert not lightbox.is_visible()
            assert desktop.locator("#modal-overlay").is_visible()

            desktop.evaluate("window.print = () => {}")
            desktop.locator("#modal-print").click()
            print_image = desktop.locator("#print-report .incident-summary-image")
            assert print_image.count() == 1
            desktop.emulate_media(media="print")
            assert print_image.evaluate("image => getComputedStyle(image).maxHeight") != "none"
            desktop.emulate_media(media="screen")
            local_image_count = verify_all_local_images(desktop)
            selected_image_count = verify_all_selected_images(
                desktop, f"http://127.0.0.1:{port}"
            )
            assert not desktop_errors, desktop_errors
            desktop.close()

            mobile = browser.new_page(viewport={"width": 390, "height": 844})
            mobile_errors = []
            mobile.on("pageerror", lambda error: mobile_errors.append(str(error)))
            mobile.goto(
                f"http://127.0.0.1:{port}/?viewport=mobile#gunashli-2015",
                wait_until="domcontentloaded",
            )
            mobile_figure = mobile.locator(".incident-image-figure")
            mobile_figure.wait_for(state="visible")
            assert_horizontally_inside(
                mobile_figure.bounding_box(), mobile.locator("#modal-container").bounding_box()
            )
            mobile.screenshot(path=screenshot_dir / "gunashli-pilot-mobile-summary.png")
            mobile_figure.locator("button").click()
            mobile_lightbox = mobile.locator("#image-lightbox")
            mobile_lightbox.wait_for(state="visible")
            assert_inside(
                mobile.locator("#image-lightbox-image").bounding_box(),
                mobile_lightbox.bounding_box(),
            )
            close_box = mobile.locator("#image-lightbox-close").bounding_box()
            assert close_box["x"] >= 0 and close_box["y"] >= 0
            mobile.screenshot(path=screenshot_dir / "gunashli-pilot-mobile-lightbox.png")
            assert not mobile_errors, mobile_errors
            for incident_id in [
                "ocean-ranger-1982",
                "sea-gem-1965",
                "west_gamma_1990",
                "sinbad-platform-nearmiss-2021",
                "lfe-14-anchor-handling-seaman-injury-anonymous",
            ]:
                verify_mobile_image(
                    mobile, f"http://127.0.0.1:{port}", incident_id
                )
            mobile.close()
            browser.close()
    finally:
        server.shutdown()
        server.server_close()

    print(
        f"PASS: {selected_image_count} selected incident images render; "
        f"{local_image_count} local image files decode; Gunashli pilot works on "
        "desktop, mobile, lightbox, hover and print"
    )
    print(f"Screenshots: {screenshot_dir / 'gunashli-pilot-desktop-summary.png'}")
    print(f"             {screenshot_dir / 'gunashli-pilot-desktop-lightbox.png'}")
    print(f"             {screenshot_dir / 'gunashli-pilot-mobile-summary.png'}")
    print(f"             {screenshot_dir / 'gunashli-pilot-mobile-lightbox.png'}")


if __name__ == "__main__":
    run_verification()