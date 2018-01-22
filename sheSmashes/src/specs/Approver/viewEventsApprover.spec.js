var expect = require('chai').expect;
var loginPageObj = require('../pageObject/login.page');
var viewEventPageObj = require('../pageObject/viewEvents.page');

describe('Approver - view Events', function () {
    it('User should be able to view any event', function () {
        loginPageObj.open(); // Launch the site
        loginPageObj.username.setValue("approver1"); // Enter username
        loginPageObj.password.setValue("approver1"); // Enter password
        loginPageObj.LoginBtn.click();  // Click on login button
        viewEventPageObj.eventsLink.waitForEnabled(5000); // Wait 
        viewEventPageObj.eventsLink.click();   // Click on Event link
        viewEventPageObj.viewEventLink.waitForEnabled(5000);
        viewEventPageObj.viewEventLink.click(); // click on view event link
        viewEventPageObj.firstEvent.waitForEnabled(8000);
        viewEventPageObj.firstEvent.click(); // click on first event displayed in list
        viewEventPageObj.registerBtn.waitForEnabled(8000);
        viewEventPageObj.registerBtn.click(); // Register for the event
    }); 
});


