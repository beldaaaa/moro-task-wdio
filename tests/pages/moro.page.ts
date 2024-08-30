import exp from "constants";

class MoroPage {

    private tabToSelect: string;

    public set setTabToSelect(tabToSelect: string) {
        this.tabToSelect = tabToSelect;
    }

    async goToCareer() {

        const pageElement = await $('li.m-main__item:nth-child(6)');
        await expect(pageElement).toBeDisplayed();
        await expect(pageElement).toHaveText(this.tabToSelect.toLocaleUpperCase());
        await pageElement.click();
        await this.verifyUrl();
    }

    private async verifyUrl() { //TODO: solve duplicity with page method
        await expect(browser).toHaveUrl(
            expect.stringContaining(await this.formatInput(this.tabToSelect)));
    }
    private async formatInput(inputString: string) {
        return inputString.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();
        //example: Kariéra -> kariera
    }
}
export default new MoroPage();