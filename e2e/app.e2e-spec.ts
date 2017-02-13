import { ThreeChoicesUiPage } from './app.po';

describe('three-choices-ui App', function() {
  let page: ThreeChoicesUiPage;

  beforeEach(() => {
    page = new ThreeChoicesUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
