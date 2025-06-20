const { $ } = require('@wdio/globals')
const Page = require('./page');

class HomePage {
    get framesLink() {
        return $('a[href="/frames"]');
    }

    get nestedFramesLink() {
        return $('a[href="/nested_frames"]');
    }

    async open() {
        await browser.url('https://the-internet.herokuapp.com');
    }

    async goToFrames() {
        await this.framesLink.waitForDisplayed();
        await this.framesLink.click();
    }

    async goToNestedFrames() {
        await this.nestedFramesLink.waitForDisplayed();
        await this.nestedFramesLink.click();
    }
}

module.exports = new HomePage();
