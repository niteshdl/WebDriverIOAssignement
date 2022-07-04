const LandingPage = require('../pageobjects/LandingPage');
const CreateAccountPage = require('../pageobjects/CreateAccountPage');
const LoginPage = require('../pageobjects/LoginPage');
const ExpectChai = require('chai').expect
const LoginData = require('../testData/LoginData');

describe('Login Test', () => {
    it('User should able to Login with vaild loginname and password', async () => {
        await browser.maximizeWindow()
        await LandingPage.open();
        await LandingPage.clickSignIn();
       
        await ExpectChai( await LoginPage.txtText()).to.equal("RETURNING CUSTOMER")
                
        await LoginPage.enterLoginName(LoginData.username)
        await LoginPage.enterPassword(LoginData.password)
        await LoginPage.clickLoginButton()
                  
        await ExpectChai(await LoginPage.txtMyAccountText()).to.equal("MY ACCOUNT")
        
    });
});


