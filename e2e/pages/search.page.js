const Page = require('./base.page');

class SearchPage extends Page {
    get loadingModalText() { return $('(//*[text()="Preparing your personalized flight recommendation considering:"])'); }
    get roundTripTotalLabel() { return super.elByText('Round trip total')}
    get selectButton() { return super.elByText('Select')}
}

module.exports = new SearchPage();
