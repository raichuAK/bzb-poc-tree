import { TreePocPage } from './app.po';

describe('tree-poc App', function() {
  let page: TreePocPage;

  beforeEach(() => {
    page = new TreePocPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
