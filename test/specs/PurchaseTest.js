const LandingPage = require('../pageobjects/LandingPage');
const CreateAccountPage = require('../pageobjects/CreateAccountPage');
const LoginPage = require('../pageobjects/LoginPage');
const CategoryMenuPage = require('../pageobjects/CategoryMenuPage');
const ShoppingCartPage = require('../pageobjects/ShoppingCartPage');
const CheckoutConfirmationPage = require('../pageobjects/CheckoutConfirmationPage');
const ExpectChai = require('chai').expect

describe('Purchase an item', () => {
    it('User should be able to select product,add to cart, make payment and order should get placed', async () => {
        await browser.maximizeWindow()
        await LandingPage.open();
        await LandingPage.clickSignIn();
       
        await ExpectChai( await LoginPage.txtText()).to.equal("RETURNING CUSTOMER");
                
        await LoginPage.enterLoginName('AmitJacksonNew12');
        await LoginPage.enterPassword('Amit@1234');
        await LoginPage.clickLoginButton();
                  
        await ExpectChai(await LoginPage.txtMyAccountText()).to.equal("MY ACCOUNT");
        
        await CategoryMenuPage.clickOnSpecials();
        await CategoryMenuPage.selectProduct('ABSOLUE EYE PRECIOUS CELLS');
        await CategoryMenuPage.clickOnAddToCart();
        
        await ExpectChai( await ShoppingCartPage.txtgetTitleText()).to.equal("SHOPPING CART");
        await ExpectChai( await ShoppingCartPage.txtgetProductName()).to.equal("Absolue Eye Precious Cells");
        await ShoppingCartPage.clickOnCheckoutButton();

        await ExpectChai( await CheckoutConfirmationPage.txtgetTitleText()).to.equal("CHECKOUT CONFIRMATION");
        await ExpectChai( await CheckoutConfirmationPage.txtgetProductName()).to.equal("Absolue Eye Precious Cells");
        await CheckoutConfirmationPage.clickOnCheckoutButton();
       
        await ExpectChai( await CheckoutConfirmationPage.txtgetConfirmationText()).to.equal("Thank you for shopping with us!");
        await ExpectChai( await CheckoutConfirmationPage.txtgetTitleText()).to.equal("YOUR ORDER HAS BEEN PROCESSED!");
    });
});


