import { pause } from "webdriverio/build/commands/browser";

class Page {

    private keyword: string;

    async openBrowser() {
        browser.url('/');//opens google via baseUrl in wdio.conf.js
        browser.maximizeWindow();
    }

    get getSearchBox() {
        return $('[name="q"]');
    }
    get getSearchButton() {
        return $('[name="btnK"]');
    }
    set setKeyword(keyword: string) {
        this.keyword = keyword;
    }

    async searchForKeyword() {
        const searchBox = this.getSearchBox;
        await searchBox.setValue(this.keyword);
        const searchButton = this.getSearchButton;
        await expect(searchButton).toBeDisplayed()
        await searchButton.click();
    }

    private async formatInput(inputString: string) {
        return inputString.toLowerCase().replace(/\s/g, '');
    }

    private async verifyUrl() {
        await expect(browser).toHaveUrl(
            expect.stringContaining(await this.formatInput(this.keyword)));
    }

    async findResult() {
        const firstResultLink = await $('h3.LC20lb.MBeuO.DKV0Md');
        await firstResultLink.click();
        await this.verifyUrl();
    }
}
export default new Page();