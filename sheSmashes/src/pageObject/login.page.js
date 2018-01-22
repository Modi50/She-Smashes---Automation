var page = require('./page');
var exports = require('exports');

var loginPageObj = Object.create(page, {
    /**
     * define elements
     */
    username:  { get: function () { return $("//*[@name='username']"); } },
    password:  { get: function () { return $("//*[@name='password']"); } },
    LoginBtn : { get: function () { return $(".button-line>div>button");} },
    errorMessage : { get: function () { return $(".//h3//following::div[1]");} },
    OK : { get: function () { return $(".//h3//following::button");} },
    
    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        page.open.call(this, "http://develop-shesmashes-thehub.herokuapp.com");
    } }
});

module.exports = loginPageObj;