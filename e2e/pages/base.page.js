/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 *
 * CAUTION:
 * Synchronous Mode will be deprecated with Node.js v16. With an update to the underlying Chromium version it became
 * technically impossible to provide the same synchronous behavior. We recommend to start transition to asynchronous
 * command execution.
 */

module.exports = class Page {
    /**
     * Opens a sub page of the page
     * @param path path of the sub page (e.g. /path/to/page.html)
     */
    open(path) { return browser.url(path) }

    elByText(text) { return $(`(//*[text()="${text}"])[1]`); }
}
