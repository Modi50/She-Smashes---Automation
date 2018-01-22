var page = require('./page');

var ViewInitiativePageObj = Object.create(page, {
    initiativesLink: { get: function () { return $(".//span[text()='Initiatives']//following::button[1]/div"); } },
    viewInitiativesLink:  { get: function () { return $(".//*[contains(text(),'View Initiatives')]"); } },
    firstInitiativeLink : { get: function () { return $(".//*[@id='initiativeDetails']/div/div[1]/span/div/div/div/a");} },
    InitiativeDetails : { get: function () { return $(".//div[text()='Events Timeline']//following::section/div[2]/div[2]/div[3]/b");} },
});
module.exports = ViewInitiativePageObj;