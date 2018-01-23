var page = require('./page');

var ViewEventsPageObj = Object.create(page, {
    eventsLink: { get: function () { return $(".//span[text()='Events']//following::button[1]/div"); } },
    viewEventLink:  { get: function () { return $(".//*[contains(text(),'View Events')]"); } },
    firstEvent : { get: function () { return $(".//*[@id='ViewEvent']/div[1]/span/div/div/div/a");} },
    registerBtn : { get: function () { return $(".//*[@class='button-line']/div/button");} },
});
module.exports = ViewEventsPageObj;