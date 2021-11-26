const LoginPage = require('../pages/login.page');
const HomePage = require('../pages/home.page');
const SearchPage = require('../pages/search.page');
const Users = require('../testData/Users');

describe('Test assessment', () => {
    it('should navigate to checkout page', async () => {
        // Initialize test data
        const user = Users.testUser;

        // Log In
        await LoginPage.open();
        await LoginPage.login(user.username, user.password);
        await HomePage.originInput.waitForExist();

        // Input flight info
        await HomePage.selectFromOrigin('San Francisco', 'San Francisco  (All Airports)');
        await HomePage.selectFromDestination('Los Angeles', 'Los Angeles  (All Airports)');
        await HomePage.departureDateInput.click();
        // Datepicker selector requires more robust solution. I made it just to work due to time constraints
        await HomePage.day1.waitForExist();
        await HomePage.day1.click();
        await HomePage.day5.waitForExist();
        await HomePage.day5.click();

        // Search
        await HomePage.searchButton.click();
        await SearchPage.loadingModalText.waitForExist();
        let searchErr = 'Search hasn\'t been completed in 30 sec';
        await SearchPage.loadingModalText.waitForExist({timeout: 30000, reverse: true, timeoutMsg: searchErr});

        // Select a flight
        await SearchPage.roundTripTotalLabel.click();
        await SearchPage.selectButton.click();
        await SearchPage.loadingModalText.waitForExist();
        await SearchPage.loadingModalText.waitForExist({timeout: 30000, reverse: true, timeoutMsg: searchErr});

        await SearchPage.roundTripTotalLabel.click();
        await SearchPage.selectButton.click();

        // Expected condition
    });
});


