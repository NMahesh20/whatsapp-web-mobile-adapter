// macOS Firefox user agent for WhatsApp Web
const MACOS_FIREFOX_UA =
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:122.0) Gecko/20100101 Firefox/122.0";

let webRequestListenerActive = false;

// Function to register web request listener
function registerWebRequestListener() {
    if (webRequestListenerActive) return;

    try {
        browser.webRequest.onBeforeSendHeaders.addListener(
            (details) => {
                const headers = details.requestHeaders;
                const ua = MACOS_FIREFOX_UA;

                // Find and update User-Agent header
                for (let i = 0; i < headers.length; i++) {
                    if (headers[i].name.toLowerCase() === "user-agent") {
                        headers[i].value = ua;
                        break;
                    }
                }

                return { requestHeaders: headers };
            },
            { urls: ["https://web.whatsapp.com/*"] },
            ["blocking", "requestHeaders"],
        );
        webRequestListenerActive = true;
        // console.log("User Agent Switcher: webRequest listener registered");
    } catch (error) {
        console.error(
            "User Agent Switcher: Failed to register listener",
            error,
        );
    }
}

// Register listener on startup
registerWebRequestListener();

// Re-register listener when user navigates to WhatsApp Web
browser.webNavigation.onBeforeNavigate.addListener(
    (details) => {
        if (details.url.includes("web.whatsapp.com")) {
            registerWebRequestListener();
        }
    },
    { url: [{ hostContains: "web.whatsapp.com" }] },
);
