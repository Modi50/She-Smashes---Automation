var page = require('./page');

var dashboardPageObj = Object.create(page, {
    
    logo:  { get: function () { return $(".//*[@class='logo']"); } },
    dashboardLink:  { get: function () { return $(".//*[contains(text(),'Dashboard')]"); } },
    LogoutBtn : { get: function () { return $(".//span[text()='Initiatives']//following::button[2]/div");} },
    myProgressSection : { get: function () { return $("(.//div[text()='My Progress'])[1]//following::div[1]");} },
    eventsTimelineSection : { get: function () { return $(".//div[text()='Events Timeline']//following::section");} },
    firstEventInTimeline : { get: function () { return $(".//div[text()='Events Timeline']//following::section/div[2]/div[2]/div[3]/b/a");} },
    eventDetails : { get: function () { return $("/.//*[@class='event-details']");} },
});

module.exports = dashboardPageObj;