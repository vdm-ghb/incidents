import re
from pathlib import Path


REPO_ROOT = Path(__file__).resolve().parents[1]
DATA_PATH = REPO_ROOT / "data" / "incidents.js"
CATALOGUE_PATH = REPO_ROOT / "working documentation" / "INCIDENT_IMAGES.md"
IMAGE_DIR = REPO_ROOT / "images"


def parse_dataset(text):
    records = re.findall(
        r"(?ms)^      id: '([^']+)',(.*?)(?=^      id: '|\Z)", text
    )
    incident_ids = [incident_id for incident_id, _ in records]
    selected = {}
    for incident_id, body in records:
        image_match = re.search(
            r"(?m)^      image: \{\s*\n        src: '([^']+)'", body
        )
        if image_match:
            selected[incident_id] = image_match.group(1)
    return incident_ids, selected


def parse_catalogue(text, dataset_ids):
    catalogue_files = set(re.findall(r"`(images/[^`]+)`", text))
    entries = re.findall(
        r"(?ms)\*\*Incident ID:\*\* `([^`]+)`"
        r"(.*?)(?=\*\*Incident ID:\*\*|\Z)",
        text,
    )
    canonical_assets = {}
    for incident_id, body in entries:
        local_files = set(re.findall(r"`(images/[^`]+)`", body))
        if incident_id in dataset_ids and local_files:
            canonical_assets[incident_id] = local_files
    return catalogue_files, canonical_assets


def run_audit():
    dataset_text = DATA_PATH.read_text(encoding="utf-8")
    catalogue_text = CATALOGUE_PATH.read_text(encoding="utf-8")
    incident_ids, selected = parse_dataset(dataset_text)
    dataset_ids = set(incident_ids)
    catalogue_files, canonical_assets = parse_catalogue(
        catalogue_text, dataset_ids
    )
    local_files = {
        f"images/{path.name}" for path in IMAGE_DIR.iterdir() if path.is_file()
    }

    assert len(incident_ids) == 63, f"Expected 63 incidents, found {len(incident_ids)}"
    assert len(dataset_ids) == len(incident_ids), "Duplicate incident IDs found"
    assert catalogue_files == local_files, (
        f"Catalogue-only paths: {sorted(catalogue_files - local_files)}; "
        f"uncatalogued local files: {sorted(local_files - catalogue_files)}"
    )
    assert set(selected.values()) <= local_files, (
        f"Selected paths missing on disk: {sorted(set(selected.values()) - local_files)}"
    )
    assert set(selected.values()) <= catalogue_files, (
        "Selected paths absent from catalogue: "
        f"{sorted(set(selected.values()) - catalogue_files)}"
    )
    assert set(selected) <= set(canonical_assets), (
        "Selected incidents without catalogued local assets: "
        f"{sorted(set(selected) - set(canonical_assets))}"
    )

    unselected = sorted(set(canonical_assets) - set(selected))
    mumbai_has_local_asset = "mumbai-high-north-2005" in canonical_assets
    print(
        f"PASS: {len(local_files)} local files are catalogued; "
        f"{len(canonical_assets)} canonical incidents have local assets; "
        f"{len(selected)} incidents have selected images"
    )
    print(f"Canonical local-asset incidents without an image field: {unselected}")
    print(f"Mumbai High has a local catalogued asset: {mumbai_has_local_asset}")


if __name__ == "__main__":
    run_audit()