/**
 * The type of tests we were talking about before were the dynamic tests
 * all of them ran with no exceptions,
 * with exclusive tests, you can choose wich test to run using .only()
 * 
 * Example: 
 */
const {Builder, Browser, By} = require('selenium-webdriver')
const assert = require('node:assert')
describe("Gmail Test", function(){
    
    describe("Login tests", function(){
        it.only("should change pages", async function(){ /**.only(), note that the .only could be used in the describe function and would run the 2 scripts  */
            let driver = await new Builder().forBrowser(Browser.FIREFOX).build();
            await driver.get('https://workspace.google.com/gmail/')
            
            await driver.findElement(By.css('div.header__aside a')).click()
            
            const url = await driver.getCurrentUrl()
            
            assert.ok(url.includes('/products'), "Url deveria conter products")
            
            driver.quit()
        })
    })
    
    describe("Title tests", function(){
        it("should get the title", async function(){
            let driver = await new Builder().forBrowser(Browser.FIREFOX).build();
            await driver.get('https://workspace.google.com/gmail/')
            const title = await driver.getTitle()
            console.log(title)
            driver.quit()
        })
    })
})