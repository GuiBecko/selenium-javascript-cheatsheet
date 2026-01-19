// In this file you will learn how to 
//set browser capabilities for your automations


// The driver accepts the so called capabilities, 
//they are especification that are passed trough the Local Node (where the script is)
//to the Endpoint Node (the browser)

// These capabilities are passed by a JSON structured object, here are them:

//  "browserName" -> defines which browser to be used, accepted values: 
//"chrome", "firefox", "MicrosoftEdge", "safari", "opera"

//  "browserVersion" -> requests a specific version of the browser, accepted values:
//String (version number "120.0").

//  "platformName" -> specifies the operation system to be used, accepted values: 
//"windows", "mac", "linux", "android", "ios"

//  "acceptsInsecureCerts" -> instructs the browser to ignore invalid, expired or autoassigned SSL certificates warnings
//accepted values: "true", "false"

// "pageLoadStrategy" -> defines when Selenium will considerate the command .get(url) or .click() will be finished
//accepted values:
//"normal" -> standard, waits for the load event to complete (images, css, JS)
//"eager" -> wait for the event DOMContentLoaded, the HTML was read but images might be still downloading
//"none" -> doesnt wait for any event

//  "setWindowRect" -> is generally not sent in the requisition, but received in the response, return a boolean value
    //"true" if the browser accepts window redimensionings or "false" if not
    
    //  "timeouts" -> defines limit timeouts for general action, accepts a JSON object with the keys:
    //"script" -> maximum time for asyncronous scripts, accepted values: milliseconds
    //"pageLoad" -> maximum time for a page to load before returning an error, accepted values: milliseconds
    //"implicit" -> implicit waiting time for finding an object, accepted values: milliseconds
    
    //  "strictFileInteractability" -> defines if the script can interact with hidden input types, accepted values:
    //"true", "false"
    
    //  "unhandledPromptBehaviour" -> defines what happens when an unexpected alert(), confirm() or prompt() appears
    //in the middle of the test, accepted values:
    //"dismiss" -> clicks on cancel/close
    //"accept" -> clicks on OK
    //"dismiss and notify" -> clicks on  cancel and shoots a warning
    //"ignore" -> leaves the prompt alone
    
    //  "proxy" -> defines the proxy server to intermediate the browser trafic, accepts a JSON object with the keys:
    //"proxyType" -> "pac", "direct", "autodetect", "system", or "manual"
    //"httpProxy" -> http host for the proxy
    //"sslProxy"
    //"noProxy" -> lists the address for which the proxy should be bypassed when the proxyType is "manual"
    //"proxyAutoconfigUrl" -> 	Defines the URL for a proxy autoconfiguration file if proxyType is equal to "pac"
    //"socksProxy" -> Defines the proxy host for a SOCKS proxy when the proxyType is "manual"
    //"socksVersion" -> Defines the SOCKS proxy version when the proxyType is "manual"
    
const {Builder, Browser} = require('selenium-webdriver');
async function capabilitiesTest(){
    let driver
    try{
        const capabilities = {
            "browserName": "chrome",
            "acceptInsecureCerts": true,
            "strictFileInteractability": false
        }
        driver = await new Builder().forBrowser(Browser.FIREFOX).withCapabilities(capabilities).build();
        
        await driver.get('https://developer.mozilla.org/pt-BR/')

        //waiting 2 seconds to finish the script
        await new Promise(function(resolve){
            setTimeout(resolve, 2000)
        })
        let titulo = await driver.getTitle()
        console.log(`.........Test successfully realized, Title:${titulo} ........`)
        await driver.quit()
        return
    }catch(e){
        console.log(e)
    }
}
capabilitiesTest()