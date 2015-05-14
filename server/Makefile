all: install test run

test: ;@echo "Testing ....."; \
	./node_modules/.bin/mocha --reporter list;

install: ;@echo "Installing ${PROJECT}....."; \
	mkdir -p logs;
	npm install;

clean: ;
	rm -rf node_modules;

run: ;
	sudo nodemon ./server.js &;

refresh: ;
	osascript -e 'tell application "Google Chrome" to tell the active tab of its first window to reload'

setup:
	npm install -g react-tools

.PHONY: test run install clean
