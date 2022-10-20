const puppeteer = require('puppeteer');
const { PuppeteerScreenRecorder } = require('puppeteer-screen-recorder');
const { installMouseHelper } = require('./install-mouse-helper');
const { autoScroll } = require('./scroll');

(async() => {
    const delay = time => {
        return new Promise((resolve, reject) => setTimeout(() => resolve(), time));
    }

    const browser = await puppeteer.launch({
        headless: false,
        args: ['--autoplay-policy=no-user-gesture-required', '--window-size=1920,1080'],
        defaultViewport: null,
    });

    const page = await browser.newPage();
    page.setDefaultNavigationTimeout(0);

    const recorder = new PuppeteerScreenRecorder(page);
    await installMouseHelper(page);

    await recorder.start('happierlead_video.mp4');
    await page.goto('https://happierleads.com');
    // , { waitUntil: 'domcontentloaded' }

    await autoScroll(page);
    // await delay(10000);

    await recorder.stop();
    await browser.close();
})();