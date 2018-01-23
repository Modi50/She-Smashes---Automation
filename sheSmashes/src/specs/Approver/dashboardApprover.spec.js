var expect = require('chai').expect;
var sleep = require('system-sleep');
var isVisible = require('isvisible');
var loginPageObj = require('../../pageObject/login.page');
var dashboardPageObj = require('../../pageObject/dashboard.page');

describe('Approver - Dashboard', function () {
    it('Verifing Dashboard', function () {
        loginPageObj.open(); // Launch the site
        loginPageObj.username.setValue("approver1"); // Enter username
        loginPageObj.password.setValue("approver1"); // Enter password
        loginPageObj.LoginBtn.click();  // Click on login button
        sleep(10000);
        dashboardPageObj.logo.isEnabled();   // Verify logo is present 
        dashboardPageObj.dashboardLink.isEnabled(); // Verify dashboard link is present
        expect(dashboardPageObj.myProgressSection).to.not.equal(" ");// Verify My progress section is present
        expect(dashboardPageObj.eventsTimelineSection).to.not.equal(" "); // Verify Event timline section is present    
        dashboardPageObj.firstEventInTimeline.click();    // Click on first event listed in timeline
        sleep(5000);
        expect(dashboardPageObj.eventDetails).to.not.equal(" "); //Verify event details
        dashboardPageObj.LogoutBtn.click(); // Logout
    }); 
});


