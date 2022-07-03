const BasePage = require('./BasePage');

class LandingPage extends BasePage {

    get SignIn () {
        return $('#customer_menu_top');
    }

    async clickSignIn () {
        await this.SignIn.click();
    }

    open () {
        return super.open();
    }

}

module.exports = new LandingPage();