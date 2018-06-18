# webdriver.io

A trial run of [webdriver.io](http://webdriver.io/).

## Installation

1. [Install webdriver.io](http://webdriver.io/guide/getstarted/install.html)
    - node modules are require but NOT included
2. Install the docker image for [Standalone Chrome](https://github.com/SeleniumHQ/docker-selenium). Seems to work by default?
3. Install Chai `npm install chai`
4. Generate a new wdio.conf.js


## Running

1. You can run the individual standalone tests by typing `node specs/<filename>`
2. You can run all of the wdio tests by typing `node_modules/.bin/wdio wdio.config.js`
