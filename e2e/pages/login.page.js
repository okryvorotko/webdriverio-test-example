const Page = require('./base.page');

class LoginPage extends Page {
    get inputUsername() { return $('[name="email"]'); }
    get inputPassword() { return $('[name="password"]'); }
    get btnSubmit() { return $('button[type="submit"]'); }

    /**
     * Logins with username and password
     * @param username username
     * @param password password
     */
    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /** Opens login page */
    open() { return super.open('login'); }
}

module.exports = new LoginPage();
