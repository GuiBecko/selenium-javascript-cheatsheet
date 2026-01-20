const {Browser, Builder, By} = require('selenium-webdriver')
const assert = require('node:assert')
/**
 * describe(description, callback):
 * A function used to group related tests together. In testing terms, this is called a "Test Suite".
 * * Analogy: Think of it as a "Folder" inside your code.
 * * Parameters:
 * 1. String: The title of the group (e.g., "Login Functionality"). This appears in the test report.
 * 2. Function: A callback function that contains the actual tests ('it' blocks) or another 'describe' block.
 */
describe("Login Functionality", function() {
    // ...
});

/**
 * Nesting describe blocks increases the specificity of the Test Suites,
 * it improves the visuability in the report
 */
describe("Login functionality", function (){

    describe("Correct password", function(){
        // ...
    })

    describe("Wrong password", function(){
        // ...
    })

})

/**
 * it(description, callback):
 * This is where the test logic lives, if describe() was a "folder", 
 * it() is a "file".
 * * Parameters:
 * 1. String: The description of the behaviour being tested. Usually
 * starts with "should..." to form a sentence
 * 2. Function: The script (in our case, a Selenium script, bu it could be
 * a simple arithmetic check)
 */


/**
 * In this example we open the Gmail website and check if the url has changed, if yes, it passes
*/
describe("Gmail Test", function(){
    
    describe("Login tests", function(){
        it("should change pages", async function(){
            let driver = await new Builder().forBrowser(Browser.FIREFOX).build();
            await driver.get('https://workspace.google.com/gmail/')
            
            await driver.findElement(By.css('div.header__aside a')).click()
            
            const url = await driver.getCurrentUrl()
            
            assert.ok(url.includes('/products'), "Url deveria conter products")
            
            driver.quit()
        })
    })
    
})

/**
 * assert is a module that has a lot of builtin function for debuggin code:
 * * assert.strictEqual
 * * assert.equal
 * * assert.doesNotMatch
 * * etc.
 * 
 * the assert.ok receives a sentence to check, if it doesnt pass, return the second parameter string
 * 
 * 
 */