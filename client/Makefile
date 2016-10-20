BUILD = build/
SRC = src

HTML_FILES          = $(shell find $(SRC) -type f -name '*.html')
ICO_FILES           = $(shell find $(SRC) -type f -name '*.ico')
PNG_FILES           = $(shell find $(SRC) -type f -name '*.png')

D_HTML              = $(addprefix $(BUILD), $(subst src/,,$(HTML_FILES)))
D_ICO_FILES	 		= $(addprefix $(BUILD), $(subst src/,,$(ICO_FILES)))
D_PNG_FILES	 		= $(addprefix $(BUILD), $(subst src/,,$(PNG_FILES)))

copy-html: $(D_HTML)
copy-ico: $(D_ICO_FILES)
copy-png: $(D_PNG_FILES)

$(BUILD)%.png: $(SRC)/%.png
	mkdir -p $(dir $@)
	cp $? $@

$(BUILD)%.ico: $(SRC)/%.ico
	mkdir -p $(dir $@)
	cp $? $@

$(BUILD)vendor/%: vendor/%
	mkdir -p $(dir $@)
	cp $? $@

$(BUILD)%.html: $(SRC)/%.html
	mkdir -p $(dir $@)
	cp $? $@

$(BUILD)%.css: $(SRC)/%.css
	mkdir -p $(dir $@)
	cp $? $@

clean:
	rm -rf $(BUILD)*

build: copy-html copy-ico copy-png webpack-build

webpack-build:
	./node_modules/webpack/bin/webpack.js

webpack-build-prod:
	./node_modules/webpack/bin/webpack.js -p

webpack-watch:
	./node_modules/webpack/bin/webpack.js --watch

webpack-dev-server:
	./node_modules/webpack-dev-server/bin/webpack-dev-server.js

webpack-dev-server-inline:
	./node_modules/webpack-dev-server/bin/webpack-dev-server.js --inline --hot

webpack-dev-server-inline-hot:
	./node_modules/webpack-dev-server/bin/webpack-dev-server.js --inline

watch-src:
	find $(SRC) | entr sh -c 'make build'

