import { LeagueofbraveryPage } from './app.po';

describe('leagueofbravery App', () => {
  let page: LeagueofbraveryPage;

  beforeEach(() => {
    page = new LeagueofbraveryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
