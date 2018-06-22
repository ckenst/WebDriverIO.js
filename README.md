# webdriver.io

Examples of [webdriver.io](http://webdriver.io/) in action!

## Installation

1. [Install webdriver.io](http://webdriver.io/guide/getstarted/install.html) using `npm install webdriverio`
    - Requires you have [node.js installed](https://nodejs.org/en/download/)
2. Install the docker image for [Standalone Chrome](https://github.com/SeleniumHQ/docker-selenium). Seems to work by default?
3. Install Chai `npm install chai`


## Running

1. You can run the individual standalone tests by typing `node specs/<filename>`
2. You can run all of the wdio tests in the spec dir by typing `node_modules/.bin/wdio wdio.config.js`
3. You can run the other dir tests by specifying their "test suite" with `node_modules/.bin/wdio wdio.config.js <nameofsuite>`
