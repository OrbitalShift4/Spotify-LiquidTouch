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
6. In v1.9.2 and later, the official update feed is already filled in. Leave
   **Check for updates** on to receive future update offers. For older versions,
   follow the one-time setup below.


## Revised v1.9.4

The revised package rebalances Listening history, moves Close to the top left,
and removes duplicate app controls from Queue and Devices. Devices now uses
Spotify desktop’s native Connect list, handles cached/asynchronous responses,
refreshes while open, and keeps the Web API as a fallback.

**Already running v1.9.4?** Download and reinstall the revised full ZIP.
The original updater compares version numbers and cannot offer another v1.9.4.
Settings and listening history stay saved. Earlier versions can use Check now.

Persistent local listening history now has Unlimited, optional oldest-first caps,
and a confirmed Clear history action. Hold cards or player artwork for touch
context actions. Devices and Queue open in LiquidTouch. Now Playing uses one
continuous header/body tint, and large artwork stays below the header.
Quick Search hides the toolbar and has adjustable background blur in Appearance
& glass. Settings and saved history are preserved across normal updates.

## Revised v1.9.2

The revised v1.9.2 groups Settings into eight submenus. Swipe left to right to go
Back, or pull the header down to close the menu. Both gestures follow your finger
and confirm only after release past their threshold.

**Already installed the first v1.9.2?** Download and reinstall the revised full ZIP.
The older updater compares version numbers and will not offer a same-version
rebuild. Preferences and listening history are preserved.

## Patch notes and previous versions

See [Releases](https://github.com/OrbitalShift4/Spotify-LiquidTouch/releases) for full
release notes and older installation packages.

## Enable update checks (1.9.1 and lower)

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

## Ideas and recommendations

Ideas, recommendations and suggestions are welcome. Open a
[GitHub issue](https://github.com/OrbitalShift4/Spotify-LiquidTouch/issues) to share
an idea or report a problem. For bugs, include your Spotify/Spicetify versions,
screen size and text/interface scaling.
