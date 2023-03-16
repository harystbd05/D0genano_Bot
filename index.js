const fetch = require ('node-fetch');
const fs = require ('fs');
const readlineSync = require ('readline-sync');
const puppeteer = require ('puppeteer');
const delay = require ('delay');
const moment = require ('moment');
const chalk = require ('chalk');
const { Cheerio } = require('cheerio');
const clipboardy = require('clipboardy');

(async () => {

    const berapaAcc  = readlineSync.question("How to create Wallet Account ? ");
  for (let index = 0; index < parseInt(berapaAcc); index++) {

const browser = await puppeteer.launch({
   headless: false,
   args: ["--start-fullscreen"],
   defaultViewport: { width: 1366, height: 768 }

});

const page = await browser.newPage();

await page.goto('https://wallet.dogenano.io/', {waitUntil: 'networkidle2'});

await page.waitForSelector('body > app-root > div > div > div.app-grid.uk-grid > div.uk-width-expand.content-container.uk-panel > app-welcome > div > div > div.uk-text-center.uk-grid.uk-grid-stack > div.uk-width-1-1.uk-grid-margin.uk-first-column > div > div:nth-child(2) > button');
await page.click('body > app-root > div > div > div.app-grid.uk-grid > div.uk-width-expand.content-container.uk-panel > app-welcome > div > div > div.uk-text-center.uk-grid.uk-grid-stack > div.uk-width-1-1.uk-grid-margin.uk-first-column > div > div:nth-child(2) > button');

await delay (2000);

await page.$x("//button[@class='wallet-option']").then(async (ele) => {
     await ele[0].click();

     await page.waitForSelector('input[placeholder="New Wallet Password"]');
     await page.type( 'input[placeholder="New Wallet Password"]', 'Kontlo123');

     await page.waitForSelector('input[placeholder="Confirm Wallet Password"]');
     await page.type( 'input[placeholder="Confirm Wallet Password"]', 'Kontlo123');

     await page.waitForSelector('body > app-root > div > div > div.app-grid.uk-grid > div.uk-width-expand.content-container.uk-panel > app-configure-wallet > div > div.uk-card-footer.uk-text-right > button');
     await page.click('body > app-root > div > div > div.app-grid.uk-grid > div.uk-width-expand.content-container.uk-panel > app-configure-wallet > div > div.uk-card-footer.uk-text-right > button');

    //  await page.waitForSelector('body > app-root > div > div > div.app-grid.uk-grid > div.uk-width-expand.content-container.uk-panel > app-configure-wallet > div > div.uk-card-body > div:nth-child(6) > div.uk-width-3-4@m > a');
    //  await page.click('body > app-root > div > div > div.app-grid.uk-grid > div.uk-width-expand.content-container.uk-panel > app-configure-wallet > div > div.uk-card-body > div:nth-child(6) > div.uk-width-3-4@m > a');

    await page.$x("//pre[@class='mne-box']/following-sibling::a[1]").then(async (ele) => {
    await ele[0].click();
    
    })
    //  console.log(`Selesai di copy`);
    

     const value = clipboardy.readSync(); // ini untuk menampilkan hasil yang sudah di copy
    //  clipboardy.writeSync(`${value}`);
    //  console.log(value); //ini sudah benar ketika paste yang keluar luarnya copy mnemonic to clipboard
   
     // paste the value
    //  await page.keyboard.type(await clipboardy.read());

    //  await page.waitForXPath("//pre[@class='mne-box']/following-sibling::a[1]");
    //      let passwordValid = await page.$x("//pre[@class='mne-box']/following-sibling::a[1]");
    //      let passwordValidValue = await page.evaluate( el => el.textContent,
    //       passwordValid[0]);
    //       console.log(passwordValidValue);

          await page.waitForSelector('body > app-root > div > div > div.app-grid.uk-grid > div.uk-width-expand.content-container.uk-panel > app-configure-wallet > div > div.uk-card-body > div.uk-width-1-1 > label > input');
          await page.click('body > app-root > div > div > div.app-grid.uk-grid > div.uk-width-expand.content-container.uk-panel > app-configure-wallet > div > div.uk-card-body > div.uk-width-1-1 > label > input');

          await page.waitForSelector('#create-wallet');
          await page.click('#create-wallet');

          console.log(`[ ${moment().format("HH:mm:ss")} ]`,chalk.yellow(`Berhasil Membuat Account [-]`));
          
          console.log(`[ ${moment().format("HH:mm:ss")} ]`,chalk.yellow(`View Account [-]`));

          await page.waitForSelector('body > app-root > div > div > div.app-grid.uk-grid > div.uk-width-expand.content-container.uk-panel > app-configure-wallet > div.uk-card.uk-card-default > div.uk-card-footer.uk-text-right > button');
          await page.click('body > app-root > div > div > div.app-grid.uk-grid > div.uk-width-expand.content-container.uk-panel > app-configure-wallet > div.uk-card.uk-card-default > div.uk-card-footer.uk-text-right > button');

        //   await page.waitForSelector('body > app-root > div > div > div.app-grid.uk-grid > div.uk-width-expand.content-container.uk-panel > app-accounts > div > div > div.uk-card.uk-overflow-hidden > table.accounts-list.uk-table.uk-table-striped.uk-table-small > tbody > tr > td.uk-visible-toggle.uk-text-truncate > div > div > ul > li > a');
        //   await page.click('body > app-root > div > div > div.app-grid.uk-grid > div.uk-width-expand.content-container.uk-panel > app-accounts > div > div > div.uk-card.uk-overflow-hidden > table.accounts-list.uk-table.uk-table-striped.uk-table-small > tbody > tr > td.uk-visible-toggle.uk-text-truncate > div > div > ul > li > a');

         await page.waitForSelector('body > app-root > div > div > div.app-grid.uk-grid > div.uk-width-expand.content-container.uk-panel > app-accounts > div > div > div.uk-card.uk-overflow-hidden > table.accounts-list.uk-table.uk-table-striped.uk-table-small > tbody > tr > td.uk-visible-toggle.uk-text-truncate > div > a > div > div > div.nano-address-clickable.nano-address-monospace.uk-text-truncate');
         await page.click('body > app-root > div > div > div.app-grid.uk-grid > div.uk-width-expand.content-container.uk-panel > app-accounts > div > div > div.uk-card.uk-overflow-hidden > table.accounts-list.uk-table.uk-table-striped.uk-table-small > tbody > tr > td.uk-visible-toggle.uk-text-truncate > div > a > div > div > div.nano-address-clickable.nano-address-monospace.uk-text-truncate');

         

         await page.$x("/html/body/app-root/div/div/div[3]/div[2]/app-account-details/div[1]/div/div[1]/div[1]/div/div/div/div[2]/div/div[2]/ul/li[1]/a").then(async (ele) => {
    await ele[0].click();
    
    })
    console.log(`[ ${moment().format("HH:mm:ss")} ]`,chalk.yellow(`Berhasil di copy [-]`));

        const valuenya = clipboardy.readSync();
        // console.log(valuenya);


        const dataWallet = `${value}|${valuenya}\n`;
        if (dataWallet) {
            console.log(`[ ${moment().format("HH:mm:ss")} ]`, chalk.green(`Process Robot Selesai, All wallet move to dataWallet.txt !`));
            const MoveResult = fs.appendFileSync('dataWallet.txt', dataWallet);
        }

    })

    await browser.close();
  }
})
();