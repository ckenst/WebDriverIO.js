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
4. You can run the individual standalone tests (/standalone) by typing `node specs/<filename>`
