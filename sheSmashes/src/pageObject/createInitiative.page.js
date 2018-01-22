var page = require('./page');

var CreateInitiativePageObj = Object.create(page, {
    
    initiativesLink: { get: function () { return $(".//span[text()='Initiatives']//following::button[1]/div"); } },
    createInitiativesLink:  { get: function () { return $(".//*[contains(text(),'Create Initiative')]"); } },
    title : { get: function () { return $("[name='title']");} },
    description : { get: function () { return $("[name='description']");} },
    lead : { get: function () { return $("[name='lead']");} },
    createBtn : { get: function () { return $(".//button[@type='submit']");} },
});

module.exports = CreateInitiativePageObj;
