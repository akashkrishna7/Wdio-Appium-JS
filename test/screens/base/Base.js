class BaseScreen {
    async getElement(selector) {
        if (typeof selector !== 'string' || !selector) {
            throw new Error('Invalid selector provided');
        }
        return await $(selector);
    }

    async click(selector) {
        const element = await this.getElement(selector);
        await element.waitForDisplayed({ timeoutMsg: 'Element not displayed for click action' });
        await element.click();
    }

    async setValue(selector, value) {
        const element = await this.getElement(selector);
        await element.setValue(value);
    }

    async clearText(selector) {
        const element = await this.getElement(selector);
        await element.clearValue();
    }

    async isDisplayed(selector) {
        const element = await this.getElement(selector);
        return await element.isDisplayed();
    }

    async waitForDisplayed(selector) {
        const element = await this.getElement(selector);
        await element.waitForDisplayed({ timeoutMsg: 'Element not displayed' });
    }

    async getText(selector) {
        const element = await this.getElement(selector);
        return await element.getText();
    }

    async waitForText(selector, text) {
        await browser.waitUntil(async () => {
            const element = await this.getElement(selector);
            const elementText = await element.getText();
            return elementText.includes(text);
        }, { timeoutMsg: 'Text not found' });
    }
}

module.exports = BaseScreen;
