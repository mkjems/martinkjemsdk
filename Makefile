
all: clean install test run

test: ;@echo "Testing ${PROJECT}....."; \
	export NODE_PATH=.; \
	./node_modules/mocha/bin/mocha;

install: ;@echo "Installing ${PROJECT}....."; \
	npm install

clean : ;
	rm -rf node_modules;

run: ;
	nodemon nodejs server.js;

.PHONY: test run install clean
