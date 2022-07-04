# WebDriverIO-Assignment

1.Clone git https://github.com/niteshdl/WebDriverIOAssignement.git

2.Open project in Visual studio code

3.To Execute testcases, open terminial in Visual Studio code,

4.Make sure opened terminial is CMD terminial and not powershell

5.If it is Powershell terminial, allure report run command will fail

6.To execute tests run command "npx wdio run ./wdio.conf.js"

7.To view result in allure report,Make sure allure commandline is installed  

8.If allure commandline is not installed run command "npm install -g allure-commandline --save-dev"   

9.To view test execution report in allure Run command "allure generate allure-results --clean && allure open"


Instructions for TestCases Execution:

1.If you like to run all test files at same time use command "npx wdio run ./wdio.conf.js"

2.If you like to run only specific test files you can add a --spec parameter:
Ex.
npx wdio run ./wdio.conf.js --spec LoginTest.js
npx wdio run ./wdio.conf.js --spec PurchaseTest.js
npx wdio run ./wdio.conf.js --spec RegisterUserTest.js   


