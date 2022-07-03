const BasePage = require('./BasePage');

class ShoppingCartPage extends BasePage {

    
    get txttitle () {
        return $('.maintext');
    }

    get txtProductName () {
        return $("[class='container-fluid cart-info product-list'] [class='table table-striped table-bordered'] tr td:nth-child(2) a");
    }

    get btnCheckOut () {
        return $("[class$='cart-info product-list'] [id^='cart_checkout']");
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
      
}

module.exports = new ShoppingCartPage();