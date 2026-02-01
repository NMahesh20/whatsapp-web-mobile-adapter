# WhatsApp Web Mobile Adapter

This Firefox extension adapts WhatsApp Web for mobile Firefox by spoofing the device as a PC and applying mobile-friendly overrides.

## Installation

1. Clone or download this repository.
2. Open Firefox on Android.
3. Go to `about:config` and set `xpinstall.signatures.required` to `false` (for sideloading unsigned extensions).
4. Go to `about:addons`, click the gear icon, and select "Install Add-on From File".
5. Select the extension ZIP file (you need to zip the folder).

## Features

- Spoofs user agent and screen properties to bypass mobile detection.
- Scales the interface to fit mobile screens.
- Adjusts layout for better mobile usability.

## Files

- `manifest.json`: Extension manifest.
- `background.js`: Background script (minimal).
- `content.js`: Content script that injects spoofing and styles.
- `styles.css`: Additional CSS.
- `webextension-polyfill.js`: Polyfill for WebExtensions API.
- `icons/`: Icon files (48x48 and 96x96 PNGs needed).

## Building

To create the extension ZIP:

```bash
zip -r whatsapp-web-mobile-adapter.xpi *
```

Then install the .xpi file in Firefox via `about:addons` > Install Add-on From File.

## Note

Icons are not included; you can add 48x48 and 96x96 PNG files in icons/ folder and update manifest.json accordingly.