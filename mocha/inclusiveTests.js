/**
 * Inclusive Tests are the opposite of exclusive tests
 * on exclusive you could especify which tests would be
 * run, on Inclusive you can choose which will be NOT run
 * using the .skip() sulfix
 * 
 * Example: 
 */

const {Builder, Browser, By} = require('selenium-webdriver')
const assert = require('node:assert')
describe("Gmail Test", function(){
    
    describe("Login tests", function(){
        it.skip("should change pages", async function(){ /**.skip(), note that the .skip could be used in the describe function and nothing would run  */
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
/**
 * In this example only the Title tests are run and the
 * Login tests remain pending (the same as not passing a
 * callback function)
 */