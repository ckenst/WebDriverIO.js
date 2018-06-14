# webdriver.io

A trial run of [webdriver.io](http://webdriver.io/).

1. [Install webdriver.io](http://webdriver.io/guide/getstarted/install.html)
    - node modules are not included but required
2. You can run the individual standalone tests by typing `node specs/<filename>`
3. You can run all of the wdio tests by typing `node_modules/.bin/wdio wdio.config.js`
    - I believe you have to do a global install in order to only reference wdio.
4. Install the docker image for [Standalone Chrome](https://github.com/SeleniumHQ/docker-selenium). Seems to work by default?
5. Generate a new wdio.conf.js
  - Removed this due to the credentials we store
