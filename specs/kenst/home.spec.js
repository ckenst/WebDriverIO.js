const HomePage  = require('../../pages/kenst.com.page');

describe('About Kenst.com', function() {
    beforeEach(function(){
      HomePage.open();
    });

    it('should have a profile image', function() {
        HomePage.navResources.waitForExist();
        HomePage.heroImage.waitForVisible();
    });

    // it('should have the right title', function() {
    //     HomePage.open();
    //     HomePage.navResources.waitForExist();
    //     HomePage.navAbout.click();
    //     AboutPage.assertUsingGetTitle();
    // });
    //
    // it('should have the right href', function() {
    //     HomePage.open();
    //     AboutPage.assertUsingGetAttribute();
    // });
});
