var page = require('./page');

var approveEventPageObj = Object.create(page, {
    
    pendingApprovalNotification:  { get: function () { return $(".//*[@id='root']/div/div/nav/div/div/span"); } },
    firstTaskLink:  { get: function () { return $(".//*[@id='taskAccordian']/div[1]/div[1]/h3"); } },
    taskDescription : { get: function () { return $(".//*[@id='taskAccordian']/div[1]/div[1]/div/div");} },
    approveButton : { get: function () { return $("(.//*[@class='button-line'])[1]/div");} },
});

module.exports = approveEventPageObj;