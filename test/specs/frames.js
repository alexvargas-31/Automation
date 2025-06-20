const { expect } = require('@wdio/globals');
const HomePage = require('../pageobjects/home.page')

describe('Frames Test', () => {
    it('Should go to the Frames page and check the title', async () => {
        await HomePage.open();          // Abre la página principal
        await HomePage.goToFrames();   // Hace clic en "Frames"

        // Verifica que se muestra el título "Frames"
        const title = await $('h3');
        await title.waitForDisplayed();
        const text = await title.getText();

        expect(text).toBe('Frames');
    });
});

describe('Nested Frames Test', () => {
    it('Nested Frames and check MIDDLE and LEFT texts', async () => {
        await HomePage.open();
        await HomePage.goToFrames();
        await HomePage.goToNestedFrames();

        await browser.pause(2000); // pausa 2 segundos

        // Change frame
        browser.switchToFrame($("frame[name='frame-bottom']"))
      //identify element with tagname
      const buttomFrame = $('<body>')
      //get text inside frame
      console.log(buttomFrame.getText() + ' - Text inside frame')   
      //switch to main page
      browser.switchToFrame(null)
      
      browser.switchToFrame($("frame[name='frame-left']"))
      //identify element with tagname
      const leftFrame = $('<body>')
      //get text inside frame
      console.log(leftFrame.getText() + ' - Text inside frame')   
      //switch to main page
      browser.switchToFrame(null) 
      
      browser.switchToFrame($("frame[name='frame-middle']"))
      //identify element with tagname
      const middleFrame = $('<body>')
      //get text inside frame
      console.log(middleFrame.getText() + ' - Text inside frame')   
      //switch to main page
      browser.switchToFrame(null) 


        await browser.back();


        await browser.pause(2000);

    });
});