class Page {

    private keyword: string;

    async openBrowser() {
        browser.url('/');//opens google via baseUrl in wdio.conf.js
        browser.maximizeWindow();
    }
   
    async searchForKeyword(keyword: string) {
        this.keyword = keyword;
        const searchBox = $('[name="q"]');
        await searchBox.setValue(this.keyword);
        const searchButton = $('[name="btnK"]');
        await searchButton.click();
    }

    private async formatInput(inputString: string) {
        return inputString.toLowerCase().replace(/\s/g, '');
    }

    private async verifyUrl(){
        expect(browser).toHaveUrl(
            expect.stringContaining(await this.formatInput(this.keyword)));
    }

    async findResult() {
        const firstResultLink = await $('h3.LC20lb.MBeuO.DKV0Md');
        await firstResultLink.click();
        await this.verifyUrl();
    }
}
export default new Page();