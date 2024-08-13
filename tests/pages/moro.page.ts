class MoroPage {

    async goToCareer() {
        const link = await $('li.m-main__item:nth-child(6) > a:nth-child(1)');
        await link.click();
    }
}
export default new MoroPage();