const {Browser, Builder} = require('selenium-webdriver')

async function windowMethods() {
    let driver
    try {
        driver = await new Builder().forBrowser(Browser.FIREFOX).build();
        driver.get('https://www.selenium.dev/')

        //  Window managment methods can be used like this: 
        await driver.manage().window().maximize()
        // In this example, the script will open the page and maximize the screen

        // There are a few methods the .manage().window() can use:

        // .minimize()
        // .fullscreen()
        // getRect(), gets the size and position of the window, x and y are based on the distance of the left top corner
        const windowInfos = await driver.manage().window().getRect()
        console.log(windowInfos)
        
        // .setRect({
        //     x: 0,
        //     y: 0,
        //     width: 500,
        //     height: 700 
        //     })

        await new Promise(function(response) {
            setTimeout(response, 2000)
        })
        await driver.quit()
    } catch (e){console.log(e)}
}

windowMethods()