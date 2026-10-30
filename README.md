# LiquidTouch

LiquidTouch for Spotify. Download the latest full package, follow the included
installation instructions, and enable update checks for future releases.

**[Download the latest release](https://github.com/OrbitalShift4/Spotify-LiquidTouch/releases/latest)**
· [All versions and patch notes](https://github.com/OrbitalShift4/Spotify-LiquidTouch/releases)

## Download and install on Windows

1. Open **Download the latest release** above.
2. Under **Assets**, download **LiquidTouch-vX.Y.Z.zip**, where `X.Y.Z` is the
   release version.
3. Extract the entire ZIP to a folder on your PC.
4. Read the included installation instructions and complete their prerequisites.
5. Close Spotify and run the included **Install-Windows.ps1** as instructed by
   the package. Follow its prompts, then reopen Spotify.
6. Configure the update feed below once to receive future update offers.

## Enable update checks

After installing LiquidTouch 1.9.0 or a compatible later loader:

1. Open Spotify → LiquidTouch **Settings → Updates**.
2. Paste this into **Release feed URL**:

   ```text
   https://raw.githubusercontent.com/OrbitalShift4/Spotify-LiquidTouch/main/latest.json
   ```

3. Leave **Check for updates** on and tap **Check now**.

LiquidTouch periodically checks for compatible releases and offers **Update**
or **Later**. You approve installation. After updating, **What's new** shows
brief notes with a link to the full patch notes.

If a release requires a newer loader or installer, download its full package
and follow that release's installation instructions.

## Patch notes and previous versions

See [Releases](https://github.com/OrbitalShift4/Spotify-LiquidTouch/releases) for full
release notes and older installation packages.

## Troubleshooting

- **Up to date:** no newer compatible version is published to the configured feed.
- **Cannot reach the feed:** check the complete raw URL and your connection.
- **Update trouble:** use **Settings → Updates → Restore installed version**,
  or reinstall a full package following its instructions.

Restore installed version returns to the normally installed package, which may
be older than the immediately preceding runtime update.

For a bug report, include the LiquidTouch version, Spotify version, Windows
version and steps to reproduce. Include a screenshot when it helps; omit account
credentials and private configuration.
