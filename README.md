# webdriver.io

Examples of [webdriver.io](http://webdriver.io/) in action!

## Installation

1. [Install webdriver.io](http://webdriver.io/guide/getstarted/install.html) using `npm install`
    - Requires you have [node.js installed](https://nodejs.org/en/download/)
2. Download and start [Standalone Chrome for Docker](https://github.com/SeleniumHQ/docker-selenium):
    - Download: `docker pull selenium/standalone-chrome`
    - Start: `docker run -d -p 4444:4444 -v /dev/shm:/dev/shm selenium/standalone-chrome`

## Running

1. You can run just the tests in the /spec dir with `node_modules/.bin/wdio wdio.config.js`
2. You can run individual tests `node_modules/.bin/wdio wdio.config.js --spec <location>`
3. You can run the other dir tests by specifying their "test suite" with `node_modules/.bin/wdio wdio.config.js --suite <nameofsuite>`


## Architecture:

Our current automated GUI test architecture is:

- MochaJS is our test framework
- Written in JavaScript
- Package manager is NPM
- WDIO as the test runner
- WebDriver.io as the driver / library (aka Selenium)

## Timeout strategy

Time is a crucial component in the whole test process. Each command is fired to a Selenium server and its response contains the results of the action. When a certain action depends on the state of a different action, they need to be executed in the right order and timeouts play a crucial role in this.

We set timeouts on a few levels:

1. Framework timeouts

MochaJS has a default timeout of 10 seconds which means a single test shouldn't take longer than that. Since our tests are run at the UI, they need more than 10 seconds to complete so we override it in wdio.conf.js under mochaOpts to be 40s globally.

2. WaitForXX timeouts

Also called implicit timeouts, all of our locator detections (waitForExist, waitForVisible, et. al) also have a default timeout set in wdio.conf.js to be 15s. This means we will wait for elements for up to 15 seconds before our tests fail.
