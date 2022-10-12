const puppeteer = require('puppeteer');
const { PuppeteerScreenRecorder } = require('puppeteer-screen-recorder');

(async() => {
    const delay = time => {
        return new Promise((resolve, reject) => setTimeout(() => resolve(), time));
    }

    const browser = await puppeteer.launch({
        headless: false,
        args: ['--autoplay-policy=no-user-gesture-required'],
        defaultViewport: {
            width:1620,
            height:1080
          }
    });

    const page = await browser.newPage();
    const recorder = new PuppeteerScreenRecorder(page);

    await recorder.start('sample.mp4');
    await page.goto('https://google.com');

    let input = await page.$('input[name="q"');
    

    await input.type('Happierleads');
    await input.press('Enter');

    await delay(10000);

    await page.evaluate(() => document.getElementsByTagName('input')[0].value = '');
    input = await page.$('input[name="q"');
    
    await input.type('github');
    await input.press('Enter');

    await delay(5000);

    const h3 = await page.$('h3');
    await h3.click();
    // const hvalue = await (await h3.getProperty('textContent')).jsonValue();
    // console.log('got value: ', hvalue);
    await delay(8000);

    let link = await page.$('.HeaderMenu-link--sign-in');
    await link.click();

    await delay(10000);

    const emailField = await page.$('#login_field');
    const passField = await page.$('#password')
    const loginBtn = await page.$('input[name="commit"');
    
    await emailField.type('test@gmail.com');
    await passField.type('89348ufnjdksafas');
    await loginBtn.click();
    
    delay(10000);

    await recorder.stop();
    await browser.close();
})();


// (async () => {
   
//     const browser = await puppeteer.launch({
//       headless: false,
//       args: ["--autoplay-policy=no-user-gesture-required"],
//     });
   
//     const page = await browser.newPage();
   
//     const recorder = new PuppeteerScreenRecorder(page);
   
//     await recorder.start("output.mp4");
   
//     await page.goto("https://google.com");
   
//     await page.waitForSelector(
//       "body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input"
//     );
   
//     await page.type('input[aria-label="Search"]', "Coding Shiksha");
   
//     await page.keyboard.press("Enter");
   
//     await page.waitForTimeout(4000);    
//     await page.type('input[aria-label="Search"]', "Programming Tutorials");
   
//     await page.keyboard.press("Enter");
   
//     await page.waitForTimeout(4000); 
   
//     await recorder.stop();
   
//     await browser.close();
//   })();