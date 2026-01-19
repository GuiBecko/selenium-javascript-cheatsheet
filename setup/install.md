# Download and Environment Configuration
    This is a guide to cover the installation and the prepare of the environment to developing tests automation with **Selenium Webdriver** and **Node.js**

## Pre-requisites
    Before starting, make sure **Node.js** is installed in your machine
    
    > It is recommended the LTS version (v18 or superior) for total compatibility with more recent libraries

    1. Open the terminal
    2. Verify the installed version: 

    ```
    node -v
    ```
    

# Step-by-Step

1. Initializing the project
    In your destined directory, execute this comand to open the file package.json (this is the dependecies manager of the project)

    ```
    npm init -y
    ```

2. Installing Selenium Webdriver
    Install the oficial library of Selenium for Javascript

    ```
    npm install selenium-webdriver
    ```

3.Browser drivers (Selenium Manager)
    From version 4.6 and ahead, you dont need to manually install a driver and configure the PATH, the Selenium Manager (library included) automatically detects which browser you have installed and installs the compatible driver in run time

    Automatically Supported browsers:

    - Google Chrome
    - Firefox
    - Micrososft Edge

    In case you need a specific version, you can install manually like this: 

    ```
    npm install chromedriver
    ```
    ```
    npm install geckodriver
    ```

    The driver depends on your browser of choice, run the chromedriver version if you use chrome etc.

# Verifying the installation 

    Create an file called check-env.js at the root of your project and copy this code down below to validate if everything was installed correctly 

    if you installed another browser driver, for example Firefox, change the line builder 
    ```
    driver = await new Builder().forBrowser(Browser.CHROME).build();
    ```
    to
    ```
    driver = await new Builder().forBrowser(Browser.FIREFOX).build();
    ```

    ```
    const { Builder, Browser } = require('selenium-webdriver');

    (async function helloSelenium() {
    let driver;
    try {
        console.log("🔄 Initializing environment verification.. ");
    
        // Tries to open Chrome
        driver = await new Builder().forBrowser(Browser.CHROME).build();
    
        await driver.get('[https://www.google.com](https://www.google.com)');
        console.log("✅Success!");
    
    } catch (e) {
        console.error("❌ Configuration error", e);
    } finally {
        if (driver) await driver.quit();
    }
    })();
    ```

    Run the verification test

    ```
    node check-env.js
    ```

## Recommended structure for your package.json
    After the installations, your package-json should look like this:
    ```
    {
        "name": "selenium-js-studies",
        "version": "1.0.0",
        "description": "Repositório de estudos e documentação do Selenium WebDriver",
        "main": "index.js",
        "scripts": {
            "test": "mocha tests/",
            "start": "node index.js"
        },
        "dependencies": {
            "selenium-webdriver": "^4.x.x"
            }
        }
        ```