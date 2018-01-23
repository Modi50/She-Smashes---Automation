var expect = require('chai').expect;
var sleep = require('system-sleep');
var loginPageObj = require('../../pageObject/login.page');
var CreateInitiativePageObj = require('../../pageObject/createInitiative.page');

describe('Customer - Create Initiative', function () {
    it('User should be able to create a new Initiative successfully', function () {
        loginPageObj.open(); // Launch the site
        loginPageObj.username.setValue("customer1"); // Enter username
        loginPageObj.password.setValue("customer1"); // Enter password
        loginPageObj.LoginBtn.click();  // Click on login button
        sleep(5000);
        CreateInitiativePageObj.initiativesLink.click();   // Click on initiatives link
        sleep(2000);
        CreateInitiativePageObj.createInitiativesLink.click(); // click on create initiative link
        CreateInitiativePageObj.title.waitForEnabled(5000);
        CreateInitiativePageObj.title.setValue("Title"); // Enter the title
        CreateInitiativePageObj.description.setValue("description"); // Enter the description
        CreateInitiativePageObj.lead.setValue("customer1"); // Enter the lead name
        CreateInitiativePageObj.createBtn.click(); // Click on create button
    }); 
});


