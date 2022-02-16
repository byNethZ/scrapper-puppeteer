const puppeteer = require('puppeteer');

//create a ambit
//(()=>{})();
( async () => {
    const url = 'http://www.amazon.es';
    const path = 'amazon1.jpg';

    //launch puppeteer
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    //go to page
    await page.goto(url);
    
    //actions
    await page.screenshot({path});

    //close browser
    await browser.close();
})();