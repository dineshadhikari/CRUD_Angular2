import { CRUDAppPage } from './app.po';

describe('crud-app App', () => {
  let page: CRUDAppPage;

  beforeEach(() => {
    page = new CRUDAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
