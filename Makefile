
PROJECT="Martins fede website"

all: clean install test run

test: ;@echo "Testing ${PROJECT}....."; \
	./node_modules/.bin/mocha --reporter list;

install: ;@echo "Installing ${PROJECT}....."; \
	mkdir -p logs;
	npm install;

clean : ;
	rm -rf node_modules;

run: ;
	sudo nodemon ./server.js;

.PHONY: test run install clean
