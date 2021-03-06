var expect = require('chai').expect;
var sleep = require('system-sleep');
var loginPageObj = require('../../pageObject/login.page');
var viewEventPageObj = require('../../pageObject/viewEvents.page');

describe('Approver - view Events', function () {
    it('Admin should be able to view any event', function () {
        loginPageObj.open(); // Launch the site
        loginPageObj.username.setValue("approver1"); // Enter username
        loginPageObj.password.setValue("approver1"); // Enter password
        loginPageObj.LoginBtn.click();  // Click on login button
        sleep(5000); 
        viewEventPageObj.eventsLink.click();   // Click on Event link
        sleep(2000); 
        viewEventPageObj.viewEventLink.click(); // click on view event link
        sleep(5000); 
        viewEventPageObj.firstEvent.click(); // click on first event displayed in list
        sleep(5000); 
        viewEventPageObj.registerBtn.click(); // Register for the event
    }); 
});


