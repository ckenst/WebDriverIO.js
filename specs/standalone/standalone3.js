// You can run this sample by using node. Won't work using wdio

const webdriverio = require('webdriverio');
const options = {
    desiredCapabilities: {
        browserName: 'chrome',
        proxy: {
            proxyType: "manual",
            httpProxy: "http://saltlakecity.wonderproxy.com:11000",
            socksUsername: "username",
            socksPassword: "password",
        },
    }
};

webdriverio
    .remote(options)
    .init()
    .url('https://www.iplocation.net/')
    .getTitle().then(function(title) {
        console.log('Title was: ' + title);
    })
    .saveScreenshot('whereami.png')
    .end();
