var expect = require('chai').expect;
var loginPageObj = require('../../pageObject/login.page');
var CreateEventPageObj = require('../../pageObject/createEvent.page');
var sleep = require('system-sleep');

describe('Customer - Create Event', function () {
    it('User should be able to create a new event successfully', function () {
        loginPageObj.open(); // Launch the site
        loginPageObj.username.setValue("customer1"); // Enter username
        loginPageObj.password.setValue("customer1"); // Enter password
        loginPageObj.LoginBtn.click();  // Click on login button
        sleep(10000);
        CreateEventPageObj.eventsLink.waitForEnabled(20000); // Wait 
        CreateEventPageObj.eventsLink.click();   // Click on Event link
        CreateEventPageObj.createEventLink.waitForEnabled(20000);
        if(CreateEventPageObj.createEventLink.isEnabled()){
            CreateEventPageObj.createEventLink.click(); // click on create event link
        }
        else{ console.err("Create Event link is not enabled");
        process.exit(); }
        sleep(5000);
        CreateEventPageObj.leadName.setValue("customer1"); // Enter the lead name
        CreateEventPageObj.title.setValue("Title"); // Enter the title
        CreateEventPageObj.selectInitBtn.click(); // Click on select initiative field
        CreateEventPageObj.selectInitOption.waitForEnabled(20000);
        CreateEventPageObj.selectInitOption.click(); // Select the initiative
        console.log(CreateEventPageObj.startDateField.isEnabled()); // Click on start date field
        sleep(3000);
        CreateEventPageObj.startDateField.click();
        sleep(3000);
        CreateEventPageObj.ChangeMonth.click();
        sleep(3000);
        CreateEventPageObj.selectStartDate.waitForEnabled(20000); 
        CreateEventPageObj.selectStartDate.click(); // Select the start date
        CreateEventPageObj.startDateField.waitForEnabled(20000); 
        CreateEventPageObj.endDateField.click(); // click on end date field
        CreateEventPageObj.ChangeMonth.waitForEnabled(20000);
        CreateEventPageObj.ChangeMonth.click(); // change the month
        CreateEventPageObj.SelectEndDate.click(); // select end date      

    }); 
});


