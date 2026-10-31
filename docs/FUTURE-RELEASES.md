# Future release defaults

Keep the official feed prefilled in every release after v1.9.1:

`https://raw.githubusercontent.com/OrbitalShift4/Spotify-LiquidTouch/main/latest.json`

New installations and saved empty feed fields should use this URL. Preserve a nonempty custom feed and a saved disabled Check for updates preference. Apply the default to both full installer packages and runtime update JSON before building and testing.

The default-feed source change is retained for the next requested release. v1.9.2 is withdrawn; do not recreate its update file, release or tag. v1.9.1 remains unchanged and requires the one-time feed setup documented in its release description.
