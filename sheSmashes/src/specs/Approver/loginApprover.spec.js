var assert = require('chai').assert;
var loginPageObj = require('../../pageObject/login.page');

 describe('Approver - Login with wrong credentials', function () {
     it('Admin should not be able to login', function () {
         loginPageObj.open(); // Launch the site
         loginPageObj.username.setValue("approver1"); // Enter username
         loginPageObj.password.setValue("approver1"); // Enter password
         loginPageObj.LoginBtn.click(); // Click on login button
         
     }); 
 });


