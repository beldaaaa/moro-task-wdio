import Page from './pages/page';
import MoroPage from './pages/moro.page';

describe('Google Search', () => {

    const searchKeyword: string = 'Moro Systems';
    const tabToSelect: string = 'Kariéra';

    before(() => {
        Page.openBrowser(); 
        Page.setKeyword = searchKeyword;
        MoroPage.setTabToSelect = tabToSelect;
    });

    it('should search for MoroSystems and get to its Career section', async () => {

        await Page.searchForKeyword();
        await Page.findResult();
        await MoroPage.goToCareer();
    });
});