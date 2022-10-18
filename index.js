const puppeteer = require('puppeteer')

console.log('Bot Inicializado 🤖');
async function create(){
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('http://applicant-test.us-east-1.elasticbeanstalk.com/');

    await page.evaluate(() => {
        document.querySelector('input[type="button"]').click()
      });

    const delay = ms => new Promise(res => setTimeout(res, ms));
    await delay(1000);

      var answer = await page.evaluate(() => {
    
        return document.querySelector('#answer').innerHTML

      })

      console.log(`A resposta é ${answer}`)
  
    await browser.close();

}

create();