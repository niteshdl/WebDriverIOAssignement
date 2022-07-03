const BasePage = require('./BasePage');

class LoginPage extends BasePage {

    get txttitle () {
        return $$("[class='heading2']");
    }

    get fdLoginName () {
        return $('#loginFrm_loginname');
    }

    get fdPassword () {
        return $('#loginFrm_password');
    }

    get btnLogin () {
        return $$("[class='btn btn-orange pull-right']");
    }

    get txtAccount () {
        return $(".maintext");
    }

    async txtText () {
        return await this.txttitle[1].getText();
    }

    async enterLoginName (loginName) {
        await this.fdLoginName.setValue(loginName);
    }

    async enterPassword (password) {
        await this.fdPassword.setValue(password);
    }

    async clickLoginButton () {
        await this.btnLogin[1].click();
    }

    async txtMyAccountText () {
        return await this.txtAccount.getText();
    }

    

}

module.exports = new LoginPage();