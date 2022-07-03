const BasePage = require('./BasePage');

class CreateAccountPage extends BasePage {

    get txttitle () {
        return $('.maintext');
    }

    get btnContinue () {
        return $$("[class='btn btn-orange pull-right']");
    }

    get fdFirstName () {
        return $('#AccountFrm_firstname');
    }

    get fdLastName () {
        return $('#AccountFrm_lastname');
    }

    get fdEmailId () {
        return $('#AccountFrm_email');
    }

    get fdTelephone () {
        return $('#AccountFrm_telephone');
    }

    get fdCompamy () {
        return $('#AccountFrm_company');
    }

    get fdAddress1 () {
        return $('#AccountFrm_address_1');
    }

    get fdCity () {
        return $('#AccountFrm_city');
    }


    get ddState () {
        return $('#AccountFrm_zone_id');
    }

    get fdPZipCode () {
        return $('#AccountFrm_postcode');
    }

    get ddCountry () {
        return $('#AccountFrm_country_id');
    }

    get fdLoginName () {
        return $('#AccountFrm_loginname');
    }

    get fdPassword () {
        return $('#AccountFrm_password');
    }

    get fdConfirmPassword () {
        return $('#AccountFrm_confirm');
    }

    get cbPrivacyPolicy () {
        return $('#AccountFrm_agree');
    }
    

    get btnContinueRegister () {
        return $("[class='btn btn-orange pull-right lock-on-click']");
    }

    get txtSuccess () {
        return $(".maintext");
    }

   
    async clickContinue () {
        await this.btnContinue[0].click();
    }

    async enterFirstName (firstName) {
        await this.fdFirstName.setValue(firstName);
    }

    async enterLastName (lastName) {
        await this.fdLastName.setValue(lastName);
    }

    async enterEmailID (emailID) {
        await this.fdEmailId.setValue(emailID);
    }

    async enterTelephone (telephone) {
        await this.fdTelephone.setValue(telephone);
    }

    async enterCompany (company) {
        await this.fdCompamy.setValue(company);
    }

    async enterAdress1 (adress1) {
        await this.fdAddress1.setValue(adress1);
    }

    async enterCity (city) {
        await this.fdCity.setValue(city);
    }


    async clickOnStateDD () {
        await this.ddState.click();
    }

    
    async selectState (state) {
        await this.ddState.selectByVisibleText(state);
    }

    async enterZipCode (zipcode) {
        await this.fdPZipCode.setValue(zipcode);
    }


    async clickOnCountryDD () {
        await this.ddState.click();
    }

     
    async selectCountry (country) {
        await this.ddCountry.selectByVisibleText(country);
    }

    async enterLoginName (loginName) {
        await this.fdLoginName.setValue(loginName);
    }

    async enterPassword (password) {
        await this.fdPassword.setValue(password);
    }

    async enterConfirmPassword (password) {
        await this.fdConfirmPassword.setValue(password);
    }

    async selectPrivacyPolicy () {
        await this.cbPrivacyPolicy.click();
    }

    async clickToCompleteRegister () {
        await this.btnContinueRegister.click();
    }

    async txtText () {
        return await this.txttitle.getText();
    }

    async txtAccountSuccessText () {
        return await this.txtSuccess.getText();
    }

    

}

module.exports = new CreateAccountPage();