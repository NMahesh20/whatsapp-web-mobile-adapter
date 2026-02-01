# WhatsApp Web Mobile Adapter
WhatsApp web is not accessible in mobile. So, to enable it we have request the desktop site. But in desktop site, the UI isn't that well for a mobile.
This Firefox extension adapts WhatsApp Web for mobile by spoofing the device as a PC and applying mobile-friendly overrides.

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
- `background.js`: Background script which intercept the request headers and change the user-agent to desktop version.
- `waa.js`: Content script that injects spoofing and styles.
- `icons/`: Icon files (48x48 and 96x96 PNGs needed).

## Building

To create the extension ZIP:

```bash
zip -r whatsapp-web-mobile-adapter.xpi *
```

Then install the .xpi file in Firefox via `about:addons` > Install Add-on From File.

## Note

The browser may inject the User Agent of its own, so workaround it to display the desktop site first and then continue.
