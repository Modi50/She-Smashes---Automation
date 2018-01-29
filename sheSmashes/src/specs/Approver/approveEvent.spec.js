var expect = require('chai').expect;
var isVisible = require('isvisible');
var sleep = require('system-sleep');
var loginPageObj = require('../../pageObject/login.page');
var approveEventPageObj = require('../../pageObject/approveEvent.page');
var dashboardPageObj = require('../../pageObject/dashboard.page');

describe('Customer - Dashboard', function () {
    it('Verifing Dashboard', function () {
        loginPageObj.open(); // Launch the site
        loginPageObj.username.setValue("approver1"); // Enter username
        loginPageObj.password.setValue("approver1"); // Enter password
        loginPageObj.LoginBtn.click();  // Click on login button
        sleep(5000);
        //approveEventPageObj.pendingApprovalNotification.click();   // Click on pening notification icon 
       // sleep(3000);
       //approveEventPageObj.firstTaskLink.click();// Click on first task listed in pending approval list
       // var taskName = approveEventPageObj.firstTaskLink.getText();
       // sleep(2000);
       // expect(approveEventPageObj.taskDescription).to.not.equal(" "); //Verfiy description is present
       // approveEventPageObj.approveButton.click();    // Approve the event
       // sleep(5000);
        var taskName = "Diya Painting";
        dashboardPageObj.dashboardLink.click(); // Go to dashborad
        sleep(5000);
        browser.click(".//a[text()=taskName]");
    }); 
});


