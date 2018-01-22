var expect = require('chai').expect;
var loginPageObj = require('../pageObject/login.page');
var ViewInitiativePageObj = require('../pageObject/viewInitiatives.page');
var viewEventPageObj = require('../pageObject/viewEvents.page');

describe('Customer - view Initiatives ', function () {
    it('User should be able to view initiatives', function () {
        loginPageObj.open(); // Launch the site
        loginPageObj.username.waitForEnabled(10000);
        loginPageObj.username.setValue("customer1"); // Enter username
        loginPageObj.password.setValue("customer1"); // Enter password
        loginPageObj.LoginBtn.click();  // Click on login button
        //this.timeout(60000); // Wait 
        ViewInitiativePageObj.initiativesLink.waitForEnabled(20000);
        ViewInitiativePageObj.initiativesLink.click();   // Click on Initiatives link
        ViewInitiativePageObj.viewInitiativesLink.waitForEnabled(20000);
        ViewInitiativePageObj.viewInitiativesLink.click(); // click on view Initiatives link
        this.timeout(50000);
        ViewInitiativePageObj.initiativesLink.waitForEnabled(20000);
        ViewInitiativePageObj.initiativesLink.click();   // Click on Initiatives link
        ViewInitiativePageObj.viewInitiativesLink.waitForEnabled(20000);
        ViewInitiativePageObj.viewInitiativesLink.click(); // click on view Initiatives link

        //ViewInitiativePageObj.initiativesLink.click();
        //ViewInitiativePageObj.viewInitiativesLink.click();
        this.timeout(50000);
        ViewInitiativePageObj.firstInitiativeLink.waitForEnabled(50000);
        ViewInitiativePageObj.firstInitiativeLink.click(); // click on first Initiative displayed in list
        ViewInitiativePageObj.InitiativeDetails.waitForEnabled(20000);
        ViewInitiativePageObj.InitiativeDetails.elementActive(); // View Initiative details
    }); 
});


