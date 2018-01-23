var expect = require('chai').expect;
var sleep = require('system-sleep');
var loginPageObj = require('../../pageObject/login.page');
var ViewInitiativePageObj = require('../../pageObject/viewInitiatives.page');
var viewEventPageObj = require('../../pageObject/viewEvents.page');

describe('Approver - view Initiatives ', function () {
    it('Admin should be able to view initiatives', function () {
        loginPageObj.open(); // Launch the site
        loginPageObj.username.waitForEnabled(10000);
        loginPageObj.username.setValue("approver1"); // Enter username
        loginPageObj.password.setValue("approver1"); // Enter password
        loginPageObj.LoginBtn.click();  // Click on login button
        sleep(5000);
        ViewInitiativePageObj.initiativesLink.click();   // Click on Initiatives link
        sleep(3000);
        ViewInitiativePageObj.viewInitiativesLink.click(); // click on view Initiatives link
        sleep(3000);
        ViewInitiativePageObj.firstInitiativeLink.click(); // click on first Initiative displayed in list
        sleep(3000);
        expect(ViewInitiativePageObj.InitiativeDetails).to.not.equal(" "); // View Initiative details

    }); 
});


