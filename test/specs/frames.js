const { expect } = require('@wdio/globals');
const HomePage = require('../pageobjects/home.page')

describe('Frames Test', () => {
    it('Should go to the Frames page and check the title', async () => {
        await HomePage.open();          // Main page
        await HomePage.goToFrames();   // Click to frames

        // Verification of Frames title
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

        await browser.pause(2000); // pause 2 seg

        // Chnage frame
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

        // Back (frames)
        await browser.back();

        await browser.pause(2000);

    });
});
