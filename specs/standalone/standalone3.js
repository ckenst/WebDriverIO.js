// You can run this sample by using node. Won't work using wdio

const webdriverio = require('webdriverio');
const options = {
    desiredCapabilities: {
        browserName: 'chrome',
        proxy: {
            proxyType: "MANUAL",
            httpProxy: "http://saltlakecity.wonderproxy.com:11000",
            socksUsername: "username",
            socksPassword: "password",
        },
    }
};

webdriverio
    .remote(options)
    .init()
    .url('https://wondernetwork.com/geotest')
    .getTitle().then(function(title) {
        console.log('Title was: ' + title);
    })
    .getText('#user-country').then(function(name) {
        console.log('Country name is: ' + name);
    })
    .getText('#user-region').then(function(region) {
        console.log('Region name is: ' + region);
    })
    .getText('#user-city').then(function(city) {
        console.log('City name is: ' + city);
    })
    .end();
