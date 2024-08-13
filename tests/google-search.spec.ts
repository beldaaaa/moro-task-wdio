import Page from './pages/page';
import MoroPage from './pages/moro.page';

describe('Google Search', () => {

    let searchKeyword: string = 'MoroSystems';

    before(() => {
        Page.openBrowser(); // Open Google
    });

    it('should search for MoroSystems and get to its Career section', async () => {

        await Page.searchForKeyword(searchKeyword);
        await Page.findResult();
        await MoroPage.goToCareer();
    });
});