# Running Tests

## Running

1. You can run just the tests in the /spec dir with `npm test`
2. You can run individual tests `node_modules/.bin/wdio ./conf/wdio.js --spec <location>`
3. You can run the other dir tests by specifying their "test suite" with `node_modules/.bin/wdio ./wdio.js --suite <nameofsuite>`

## Using Standalone Docker container

1. Download and start [Standalone Chrome for Docker](https://github.com/SeleniumHQ/docker-selenium):
    - Download: `docker pull selenium/standalone-chrome`
    - Start: `docker run -d -p 4444:4444 -v /dev/shm:/dev/shm selenium/standalone-chrome`

## Using Docker Compose & Docker Hub

1. Make sure Docker nodes are installed
- docker pull selenium/node-chrome
- docker pull selenium/node-firefox
- docker pull selenium/hub
- View the docker hub: http://localhost:4444/grid/console

2. Start up docker compose
- docker-compose up -d

3. Tear down docker compose
- docker-compose down

4. Scale up containers
- docker-compose up -d --scale chrome=4