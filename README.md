# IOGP Metocean Related Incidents

An interactive map and database of offshore oil & gas incidents driven by weather, sea state, and other metocean factors.

## Status

**Temporarily offline (since 2026-10-23)** while the content goes through internal review and approval. The published site (`main`) shows only a "temporarily unavailable" notice.

## Notes / decisions

- The full site is preserved unchanged on the `full-site` branch and the `pre-takedown` tag (`ee57643`). Continue development on `full-site`.
- **To restore the public site:** `git switch main && git revert <takedown commit> && git merge full-site && git push` — revert first, otherwise the merge keeps the takedown deletions.

## Last updated

2026-10-23
