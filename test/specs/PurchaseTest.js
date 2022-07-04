const LandingPage = require('../pageobjects/LandingPage');
const CreateAccountPage = require('../pageobjects/CreateAccountPage');
const LoginPage = require('../pageobjects/LoginPage');
const CategoryMenuPage = require('../pageobjects/CategoryMenuPage');
const ShoppingCartPage = require('../pageobjects/ShoppingCartPage');
const CheckoutConfirmationPage = require('../pageobjects/CheckoutConfirmationPage');
const LoginData = require('../testData/LoginData');
const ProductData = require('../testData/ProductData');
const ExpectChai = require('chai').expect

describe('Purchase an item', () => {
    it('User should be able to select product,add to cart, make payment and order should get placed', async () => {
        await browser.maximizeWindow()
        await LandingPage.open();
        await LandingPage.clickSignIn();
       
        await ExpectChai( await LoginPage.txtText()).to.equal("RETURNING CUSTOMER");
                
        await LoginPage.enterLoginName(LoginData.username)
        await LoginPage.enterPassword(LoginData.password)
        await LoginPage.clickLoginButton();
                  
        await ExpectChai(await LoginPage.txtMyAccountText()).to.equal("MY ACCOUNT");
        
        await CategoryMenuPage.clickOnSpecials();
        await CategoryMenuPage.selectProduct(ProductData.productName.toUpperCase());
        await CategoryMenuPage.clickOnAddToCart();
        //Verify-product gets added in cart
        await ExpectChai( await ShoppingCartPage.txtgetTitleText()).to.equal("SHOPPING CART");
        await ExpectChai( await ShoppingCartPage.txtgetProductName()).to.equal(ProductData.productName);
        await ShoppingCartPage.clickOnCheckoutButton();
        //Verify-product on checkout page
        await ExpectChai( await CheckoutConfirmationPage.txtgetTitleText()).to.equal("CHECKOUT CONFIRMATION");
        await ExpectChai( await CheckoutConfirmationPage.txtgetProductName()).to.equal(ProductData.productName);
        await CheckoutConfirmationPage.clickOnCheckoutButton();
        //Verify-Order get placed
        await ExpectChai( await CheckoutConfirmationPage.txtgetConfirmationText()).to.equal("Thank you for shopping with us!");
        await ExpectChai( await CheckoutConfirmationPage.txtgetTitleText()).to.equal("YOUR ORDER HAS BEEN PROCESSED!");
    });
});


