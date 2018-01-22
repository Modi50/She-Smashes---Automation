# SheSmashes-Automation  

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites  
You will need to have preinstalled NodeJS and npm on your machine. You can download the nodeJS from here https://nodejs.org/en/ 

### Installation  
 
Install npm packages "npm install" 
Install Mocha “npm install wdio-mocha-framework --save-dev” 
Install chai assertion library "npm install chai" 
Install selenium standalone globally by running the following commands in sequence 
    "npm install selenium-standalone@latest -g" 
    "selenium-standalone install" 
Start the selenium server by running the below command 
    "npm run server" 

### Setup your Browser  
    For running Chrome browser tests on your local machine you need to download ChromeDriver from https://sites.google.com/a/chromium.org/chromedriver/home  and make it available on your machine by setting the PATH to the ChromeDriver executable. 
    Same applies from Firefox as well. You can download the latest gecko driver from https://github.com/mozilla/geckodriver/releases and make it available in the PATH of your machine. 

### Execute the script  
    Run the following command to execute your test script 
     "npm run test" 

### Reports  
    Install the allure report from NPM using below command 
     “npm install wdio-allure-reporter –save –dev” 
    Run the following command to generate the HTML report 
     "npm run report"