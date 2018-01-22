var assert = require('chai').assert;
var loginPageObj = require('../pageObject/login.page');
var expectedErrorMsg = "Please enter correct username/password";
var actualErrorMsg;

 describe('Customer - Login with wrong credentials', function () {
     it('User should not be able to login', function () {
         loginPageObj.open(); // Launch the site
         loginPageObj.username.setValue("customer"); // Enter username
         loginPageObj.password.setValue("customer1"); // Enter password
         loginPageObj.LoginBtn.click(); // Click on login button
         loginPageObj.OK.waitForEnabled(5000); // Wait 
         actualErrorMsg = loginPageObj.OK.getText(); // Get the error message
         assert.notEqual(actualErrorMsg, expectedErrorMsg, "==Error message is not correct !");   // Compare the messages
         loginPageObj.OK.click(); // Close the overlay by clicking on 'OK' button
     }); 
 });


