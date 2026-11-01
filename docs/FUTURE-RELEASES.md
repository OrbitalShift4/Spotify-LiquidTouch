# Future release defaults

Keep the official feed prefilled in v1.9.2 and every later release:

`https://raw.githubusercontent.com/OrbitalShift4/Spotify-LiquidTouch/main/latest.json`

New installations and saved empty feed fields use this URL. Preserve a nonempty custom feed and a saved disabled Check for updates preference. Apply this default to both full installer packages and runtime update JSON before building and testing.

The default is implemented in the v1.9.2 source. The retained `default-update-feed.patch` documents the migration from v1.9.1; do not apply it again when the source already contains the constant.

For each full release, add its ZIP and Markdown description under `release-packages/`, update `SHA256SUMS`, and set the new version, title and ZIP hash in `release-packages/release.json`. The publishing workflow verifies the manifest and package, then creates the full release. Existing releases are left unchanged.

Publish the compatible runtime JSON under `releases/` in the same commit. The update-feed workflow validates its integrity and publishes `latest.json`. Do not edit the feed by hand.
