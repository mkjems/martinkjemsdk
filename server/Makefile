all: install test

test:
	./node_modules/.bin/mocha --reporter list;

install:
	mkdir -p logs;
	mkdir -p tmp;
	npm install --no-optional;

clean:
	rm -rf node_modules;

start-dev:
	sudo nodemon -w routers -w cartrace server

refresh:
	osascript -e 'tell application "Google Chrome" to tell the active tab of its first window to reload'

setup:
	npm install -g react-tools

