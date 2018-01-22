var expect = require('chai').expect;
var isVisible = require('isvisible');
var loginPageObj = require('../pageObject/login.page');
var dashboardPageObj = require('../pageObject/dashboard.page');

describe('Customer - Dashboard', function () {
    it('Verifing Dashboard', function () {
        loginPageObj.open(); // Launch the site
        loginPageObj.username.setValue("customer1"); // Enter username
        loginPageObj.password.setValue("customer1"); // Enter password
        loginPageObj.LoginBtn.click();  // Click on login button
        this.timeout(20000); 
        dashboardPageObj.logo.click();   // Verify logo is present
        dashboardPageObj.dashboardLink.waitForEnabled(5000); 
        dashboardPageObj.dashboardLink.click(); // Verify dashboard link is present
        dashboardPageObj.myProgressSection.waitForEnabled(5000); 
        dashboardPageObj.myProgressSection.click(); // Verify My progress section is present
        dashboardPageObj.eventsTimelineSection.waitForEnabled(20000);
        dashboardPageObj.eventsTimelineSection.click(); // Verify Event timline section is present
        dashboardPageObj.firstEventInTimeline.waitForEnabled(20000); // Wait 
        dashboardPageObj.firstEventInTimeline.click(); // Click on first event listed in timeline
        dashboardPageObj.eventDetails.waitForEnabled(5000);
        dashboardPageObj.eventDetails.click(); //Verify event details
        dashboardPageObj.LogoutBtn.waitForEnabled(5000);
        dashboardPageObj.LogoutBtn.click(); // Logout
    }); 
});


