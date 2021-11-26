const Page = require('./base.page');

class HomePage extends Page {
    get searchButton() { return $('[data-e2e="searchButton"]'); }
    get originInput() { return $('[placeholder="Where from?"]'); }
    get destinationInput() { return $('[placeholder="Where to?"]'); }
    get departureDateInput() { return $('[placeholder="Choose Date"]'); }
    get day1() { return $('(//*[contains(@class, "react-datepicker") and not(contains(@class, "disabled")) and not(contains(@class, "outside-month")) and @aria-label="day-1"])'); }
    get day5() { return $('(//*[contains(@class, "react-datepicker") and not(contains(@class, "disabled")) and not(contains(@class, "outside-month")) and @aria-label="day-5"])'); }

    /**
     * Selects Origin
     * @param inputText text in origin field
     * @param dropdownElText text in search dropdown, which will be selected
     */
    async selectFromOrigin(inputText, dropdownElText) {
        await this.originInput.addValue(inputText);
        await this.selectDropdownEl(dropdownElText);
    }

    /**
     * Selects Destination
     * @param inputText text in destination field
     * @param dropdownElText text in search dropdown, which will be selected
     */
    async selectFromDestination(inputText, dropdownElText) {
        await this.destinationInput.addValue(inputText);
        await this.selectDropdownEl(dropdownElText);
    }

    /**
     * Selects text from dropdown in Origin or Destination fields after text has been typed
     * @param dropdownElText text in search dropdown, which will be selected
     * @returns {Promise<void>}
     */
    async selectDropdownEl(dropdownElText) {
        let dropdownItemEl = super.elByText(dropdownElText);
        await expect(dropdownItemEl).toBeExisting();
        await dropdownItemEl.click();
    }
}

module.exports = new HomePage();
