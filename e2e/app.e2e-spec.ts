import { FriendsChatPage } from './app.po';

describe('friends-chat App', () => {
  let page: FriendsChatPage;

  beforeEach(() => {
    page = new FriendsChatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
