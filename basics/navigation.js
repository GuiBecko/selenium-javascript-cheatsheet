// In this file you will learn how to open an
//http page with Selenium webdriver

// Importing packs
const {Builder, Browser} = require('selenium-webdriver');

async function navigationTest(){
    //opening driver session
    let driver
    try{
        driver = await new Builder().forBrowser(Browser.FIREFOX).build();

        //driver action, opening MDN
        await driver.get('https://developer.mozilla.org/pt-BR/')

        //waiting 2 seconds to finish the script
        await new Promise(function(resolve){
            setTimeout(resolve, 2000)
        })
        
        console.log('.........Test successfully realized........')
        //quiting session
        await driver.quit()
        return
    }catch(e){
        console.log(e)
    }
}
navigationTest()