// In this file you will learn how to locate objects
//in a page

const {By, Builder, Browser} = require('selenium-webdriver');

async function navigationTest(){
    let driver
    try{
        driver = await new Builder().forBrowser(Browser.FIREFOX).build();

        await driver.get('https://www.selenium.dev/')


        // Finding an element on the page which has
        //class navbar-toggler-icon and storing it 
        //in a variable.
        let button = await driver.findElement(By.className('navbar-toggler-icon'))
        //you should see a WebElement in you terminal console
        console.log(button)
        
        // The function findElement() accepts the By
        //object, which has different ways of finding an
        //element

        // There are different ways of locating an element by different properties:
        // Class: .className()
        // CSS Selector: .css()
        // id: .id()
        // name: .name()
        // Text: linkText()
        // Partial text: partialLinkText()
        // Tag name: .tagName()
        // xpath(): xpath()
        
        // Keep in mind that if the locators finds
        //more than 1 element, it will select the first one
        await driver.quit()
        return
    }catch(e){
        console.log(e)
    }
}
navigationTest()