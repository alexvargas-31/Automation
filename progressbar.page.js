const { $ } = require('@wdio/globals')
const Page = require('./page');

class ProgressBarPage extends Page {
    get widgetsCard() {
        return $('//h5[text()="Widgets"]/ancestor::div[contains(@class,"card")]');
    }

    get widgetsMenu() {
        return $('//div[@class="header-text" and .//text()="Widgets"]');
    }

    get progressBarMenu() {
        return $('//span[text()="Progress Bar"]');
    }

    get startButton() {
        return $('#startStopButton');
    }

    get resetButton() {
        return $('#resetButton');
    }

    async openHome() {
        await browser.url('https://demoqa.com');
    }

    async goToProgressBarPage() {
        await this.widgetsCard.scrollIntoView();
        await this.widgetsCard.waitForClickable({ timeout: 5000 });
        await this.widgetsCard.click();
        await browser.pause(2000);

        await this.widgetsMenu.waitForDisplayed();
        await this.widgetsMenu.scrollIntoView();
        await this.widgetsMenu.click();

        await this.progressBarMenu.scrollIntoView();
        await this.progressBarMenu.click();

        await browser.waitUntil(async () => {
            return (await browser.getUrl()).includes('/progress-bar');
        }, {
            timeout: 5000,
            timeoutMsg: 'No se cargó la página de Progress Bar a tiempo'
        });
    }

    async startProgressBar() {
        await this.startButton.waitForDisplayed();
        await this.startButton.click();
    }

    async waitForResetButton() {
        await browser.waitUntil(async () => {
            return await this.resetButton.isDisplayed();
        }, {
            timeout: 15000,
            timeoutMsg: 'El botón Reset no apareció después de iniciar la barra'
        });
    }
}

module.exports = new ProgressBarPage();
