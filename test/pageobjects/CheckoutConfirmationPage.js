const BasePage = require('./BasePage');

class CheckoutConfirmationPage extends BasePage {

    
    get txttitle () {
        return $('.maintext');
    }

    get txtProductName () {
        return $("[class='table confirm_products'] tr td:nth-child(2) a");
    }

    get btnCheckOut () {
        return $("#checkout_btn");
    }

    get txtConfrimation () {
        return $("[class='contentpanel'] p:nth-child(6)");
    }

    async txtgetTitleText () {
        return await this.txttitle.getText();
    }

    async txtgetProductName () {
        return await this.txtProductName.getText();
    }

    async clickOnCheckoutButton () {
        await this.btnCheckOut.click()
    }

    async txtgetConfirmationText () {
        return await this.txtConfrimation.getText();
    }
      
}

module.exports = new CheckoutConfirmationPage();