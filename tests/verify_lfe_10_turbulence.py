import functools
import http.server
import socket
import threading
from pathlib import Path

from playwright.sync_api import sync_playwright


REPO_ROOT = Path(__file__).resolve().parents[1]


class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, format_string, *args):
        pass


def get_free_port():
    with socket.socket() as probe:
        probe.bind(("127.0.0.1", 0))
        return probe.getsockname()[1]


def run_verification():
    port = get_free_port()
    handler = functools.partial(QuietHandler, directory=str(REPO_ROOT))
    server = http.server.ThreadingHTTPServer(("127.0.0.1", port), handler)
    threading.Thread(target=server.serve_forever, daemon=True).start()

    try:
        with sync_playwright() as playwright:
            browser = playwright.chromium.launch(channel="msedge", headless=True)
            page = browser.new_page()
            page.goto(f"http://127.0.0.1:{port}/", wait_until="domcontentloaded")
            record = page.evaluate(
                """window.INCIDENTS_DATA.incidents.find(
                    incident => incident.id === 'lfe-10-aircraft-turbulence-helideck-2016'
                )"""
            )
            gumusut_record = page.evaluate(
                """window.INCIDENTS_DATA.incidents.find(
                    incident => incident.id === 'gumusut-gangway-2014'
                )"""
            )
            browser.close()
    finally:
        server.shutdown()
        server.server_close()

    assert record["asset_type"] == "AW139 helicopter"
    assert record["location"] == "Offshore Malaysia — installation not identified"
    assert record["lat"] == 5.7901
    assert record["lng"] == 114.4016
    assert 0 < abs(record["lat"] - gumusut_record["lat"]) < 0.02
    assert 0 < abs(record["lng"] - gumusut_record["lng"]) < 0.02
    assert record["weather_event_type"] == "equipment"
    assert record["source_classification"] == "internal"
    assert record["shell_internal_only"] is True
    assert "GTG exhaust plume" in record["weather_event"]
    assert "No numerical speed or direction reported" in record["metocean"]["wind_speed"]
    assert record["metocean"]["notes"] == (
        "The helicopter approach was planned using erroneous wind measurements supplied by the platform; "
        "poorly positioned sensors did not represent conditions at the helideck. During final approach, a "
        "GTG exhaust plume crossed the preferred approach path. The pilots believed that encountering this "
        "plume caused the momentary loss of tail-rotor effectiveness, affecting the helicopter's performance "
        "and controllability."
    )
    assert "Gumusut" not in str(record)
    assert "specific values not documented" not in str(record)
    print("PASS: LFE-10 matches UP-AW-201733 metocean, plume and source findings")


if __name__ == "__main__":
    run_verification()