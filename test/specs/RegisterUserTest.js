const LandingPage = require('../pageobjects/LandingPage');
const CreateAccountPage = require('../pageobjects/CreateAccountPage');
const ExpectChai = require('chai').expect

describe('Register a new User Test', () => {
    it('User should able to Register on entering valid details in all the input fields', async () => {
        await browser.maximizeWindow()
        await LandingPage.open();
        await LandingPage.clickSignIn();
         
        await ExpectChai( await CreateAccountPage.txtText()).to.equal("ACCOUNT LOGIN")
        
        await CreateAccountPage.clickContinue();
        await CreateAccountPage.enterFirstName('Amit')
        await CreateAccountPage.enterLastName('Jackson')
        await CreateAccountPage.enterEmailID('AmitJacksonNew18@outlook.com')   //<--Change Here
        await CreateAccountPage.enterTelephone('1111111111')
        await CreateAccountPage.enterCompany('testcompany')
        await CreateAccountPage.enterAdress1('test1 Adress')
        await CreateAccountPage.enterCity('London')
        await CreateAccountPage.clickOnStateDD()
        await CreateAccountPage.selectState('Angus')
        await CreateAccountPage.enterZipCode('11111')
        await CreateAccountPage.enterLoginName('AmitJacksonNew18')    //<--Change Here
        await CreateAccountPage.enterPassword('Amit@1234')
        await CreateAccountPage.enterConfirmPassword('Amit@1234')
        await CreateAccountPage.selectPrivacyPolicy()
        await CreateAccountPage.clickToCompleteRegister()
         //Verify- New User account gets created   
        await ExpectChai(await CreateAccountPage.txtAccountSuccessText()).to.equal("YOUR ACCOUNT HAS BEEN CREATED!")
        
    });
});


