import { EngineerPage } from './app.po';

describe('engineer App', () => {
  let page: EngineerPage;

  beforeEach(() => {
    page = new EngineerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
