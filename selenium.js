const { Builder, By, Key, until } = require('selenium-webdriver');
const HarRecorder = require('har-recorder');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

const { startRecording, endRecording } = HarRecorder();

const chromeOptions = new chrome.Options()
                      .addArguments('--remote-debugging-port=5000');

chrome.setDefaultService = new chrome.ServiceBuilder(chromedriver.path).build();


(async () => {
    const driver = await new Builder()
                   .setChromeOptions(chromeOptions)
                   .forBrowser('chrome')
                   .build();
    try {
        
        await startRecording();
        await driver.get('https://google.com/');
        await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
        await driver.wait(until.titleIs('webdriver - Google Search'), 10000);
        endRecording('tests.har');

    } finally {
        await driver.quit();
    }
})();