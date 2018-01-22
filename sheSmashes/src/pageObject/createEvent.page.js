var page = require('./page');

var CreateEventPageObj = Object.create(page, {
    
    eventsLink: { get: function () { return $(".//span[text()='Events']//following::button[1]/div"); } },
    createEventLink:  { get: function () { return $(".//*[contains(text(),'Create Event')]"); } },
    leadName : { get: function () { return $("[name= 'lead']");} },
    title : { get: function () { return $("[name= 'title']");} },
    selectInitBtn : { get: function () { return $("[name='initiativeName']>div:nth-child(2)>div>button");} },
    selectInitOption : {get: function () { return $(".//div[text()='Fitness']"); } },
    startDateField : { get: function () { return $("[name= 'eventStartDate']");} },
    selectStartDate : { get: function () { return $("html/body/div[2]/div/div[1]/div/div/div/div/div[2]/div[1]/div[3]/div/div/div[5]/button[3]");} },
    endDateField : { get: function () { return $("[name= 'eventEndDate']");} },
    ChangeMonth : { get: function () { return $("html/body/div[3]/div/div[1]/div/div/div/div/div[2]/div[1]/div[1]/button[2]");} },
    SelectEndDate : { get: function () { return $("html/body/div[3]/div/div[1]/div/div/div/div/div[2]/div[1]/div[3]/div/div/div[1]/button[1]");} },
    location : { get: function () { return $(".//*[@id='location-Location-undefined-16063']/div[1]/div[2]");} },
    selectLocation: {get: function () { return $(".//div[text()='Noida']");} },
    description : { get: function () { return $(".//div[text()='Enter description here']");} },
    category : { get: function () { return $(".//label[text()='Sports']");} },
    subcategory : { get: function () { return $(".//label[text()='Cricket']");} },
    eventType : { get: function () { return $(".//label[text()='non-hourly']");} },
    participantType : { get: function () { return $(".//label[text()='speaker']");} },
    submitBtn : { get: function () { return $(".//button[@type='submit']");} },   
});

module.exports = CreateEventPageObj;
