import { LaravelAPIPage } from './app.po';

describe('laravel-api App', function() {
  let page: LaravelAPIPage;

  beforeEach(() => {
    page = new LaravelAPIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
