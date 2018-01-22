var expect = require('chai').expect;
var loginPageObj = require('../pageObject/login.page');
var CreateEventPageObj = require('../pageObject/createEvent.page');

describe('Customer - Create Event', function () {
    it('User should be able to create a new event successfully', function () {
        loginPageObj.open(); // Launch the site
        loginPageObj.username.setValue("customer1"); // Enter username
        loginPageObj.password.setValue("customer1"); // Enter password
        loginPageObj.LoginBtn.click();  // Click on login button
        CreateEventPageObj.eventsLink.waitForEnabled(5000); // Wait 
        CreateEventPageObj.eventsLink.click();   // Click on Event link
        CreateEventPageObj.createEventLink.waitForEnabled(5000);
        CreateEventPageObj.createEventLink.click(); // click on create event link
        CreateEventPageObj.leadName.waitForEnabled(8000);
        CreateEventPageObj.leadName.setValue("Test"); // Enter the lead name
        CreateEventPageObj.title.setValue("Title"); // Enter the title
        CreateEventPageObj.selectInitBtn.click(); // Click on select initiative field
        CreateEventPageObj.selectInitOption.waitForEnabled(3000);
        CreateEventPageObj.selectInitOption.click(); // Select the initiative
        CreateEventPageObj.startDateField.click(); // Click on start date field
        CreateEventPageObj.selectStartDate.waitForEnabled(2000); 
        CreateEventPageObj.selectStartDate.click(); // Select the start date
        CreateEventPageObj.startDateField.waitForEnabled(2000); 
        CreateEventPageObj.endDateField.click(); // click on end date field
        CreateEventPageObj.ChangeMonth.waitForEnabled(2000);
        CreateEventPageObj.ChangeMonth.click(); // change the month
        CreateEventPageObj.SelectEndDate.click(); // select end date


        

    }); 
});


