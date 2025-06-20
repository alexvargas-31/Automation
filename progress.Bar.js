// ./test/specs/progress.Bar.js
const { expect } = require('@wdio/globals');
const ProgressBarPage = require('../pageobjects/progressbar.page');

describe('Validar Progress Bar DemoQA', function () {
    it('Debe iniciar y esperar hasta que el botón sea "Reset"', async function () {
        await ProgressBarPage.openHome();
        await browser.pause(1000);

        await ProgressBarPage.goToProgressBarPage();
        await ProgressBarPage.startProgressBar();
        await ProgressBarPage.waitForResetButton();

        const isResetVisible = await ProgressBarPage.resetButton.isDisplayed();
        expect(isResetVisible).toBe(true);

        await browser.refresh();

        const startButtonAfterRefresh = await ProgressBarPage.startButton;
        await startButtonAfterRefresh.waitForDisplayed();
        expect(await startButtonAfterRefresh.isDisplayed()).toBe(true);
    });
});
