const LandingPage = require('../pageobjects/LandingPage');
const CreateAccountPage = require('../pageobjects/CreateAccountPage');
const RegisterData = require('../testData/RegisterData');
const ExpectChai = require('chai').expect

describe('Register a new User Test', () => {
    it('User should able to Register on entering valid details in all the input fields', async () => {
        await browser.maximizeWindow()
        await LandingPage.open();
        await LandingPage.clickSignIn();
         
        await ExpectChai( await CreateAccountPage.txtText()).to.equal("ACCOUNT LOGIN")
        
        await CreateAccountPage.clickContinue();
        await CreateAccountPage.enterFirstName(RegisterData.FirstName)
        await CreateAccountPage.enterLastName(RegisterData.LastName)
      
        await CreateAccountPage.enterEmailID(Math.random().toString(36).substr(2, 5)+"@outlook.com")
       
        await CreateAccountPage.enterTelephone(RegisterData.TelePhone)
        await CreateAccountPage.enterCompany(RegisterData.Company)
        await CreateAccountPage.enterAdress1(RegisterData.Address1)
        await CreateAccountPage.enterCity(RegisterData.City)
        await CreateAccountPage.clickOnStateDD()
        await CreateAccountPage.selectState(RegisterData.State)
        await CreateAccountPage.enterZipCode(RegisterData.ZipCode)
    
        await CreateAccountPage.enterLoginName(Math.random().toString(36).substr(2, 5)) 
       
        await CreateAccountPage.enterPassword(RegisterData.Password)
        await CreateAccountPage.enterConfirmPassword(RegisterData.Password)
        await CreateAccountPage.selectPrivacyPolicy()
        await CreateAccountPage.clickToCompleteRegister()
        
         //Verify- New User account gets created   
        await ExpectChai(await CreateAccountPage.txtAccountSuccessText()).to.equal("YOUR ACCOUNT HAS BEEN CREATED!")
        
    });
});


