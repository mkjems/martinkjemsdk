BUILD = build/
SRC = src

# JSX_FILES           = $(shell find $(SRC) -type f -name '*.jsx')
# JS_FILES            = $(shell find $(SRC) -type f -name '*.js')
CSS_FILES           = $(shell find $(SRC) -type f -name '*.css')
HTML_FILES          = $(shell find $(SRC) -type f -name '*.html')
VENDOR_FILES        = $(shell find vendor -type f -name '*.*')
ICO_FILES           = $(shell find $(SRC) -type f -name '*.ico')

# D_JSX               = $(addprefix $(BUILD), $(subst src/,,$(addsuffix .js, $(basename $(JSX_FILES)))))
# D_JS                = $(addprefix $(BUILD), $(subst src/,,$(JS_FILES)))
D_HTML              = $(addprefix $(BUILD), $(subst src/,,$(HTML_FILES)))
D_CSS               = $(addprefix $(BUILD), $(subst src/,,$(CSS_FILES)))
D_VENDOR	 		= $(addprefix $(BUILD), $(subst src/,,$(VENDOR_FILES)))
D_ICO_FILES	 		= $(addprefix $(BUILD), $(subst src/,,$(ICO_FILES)))


# build-jsx: $(D_JSX)
copy-html: $(D_HTML)
copy-css: $(D_CSS)
copy-ico: $(D_ICO_FILES)
# copy-js: $(D_JS)
copy-vendor: $(D_VENDOR)

$(BUILD)%.ico: $(SRC)/%.ico
	mkdir -p $(dir $@)
	cp $? $@

$(BUILD)vendor/%: vendor/%
	mkdir -p $(dir $@)
	cp $? $@

# $(BUILD)%.js: $(SRC)/%.jsx
# 	mkdir -p $(dir $@)
# 	jsx $? > $@

# $(BUILD)%.js: $(SRC)/%.js
# 	mkdir -p $(dir $@)
# 	cp $? $@

$(BUILD)%.html: $(SRC)/%.html
	mkdir -p $(dir $@)
	cp $? $@

$(BUILD)%.css: $(SRC)/%.css
	mkdir -p $(dir $@)
	cp $? $@

clean:
	rm -rf $(BUILD)*

# build: build-jsx copy-js copy-html copy-css copy-vendor $(D_FAVICON)
build: copy-html copy-css copy-vendor copy-ico

webpack-build:
	./node_modules/webpack/bin/webpack.js

webpack-watch:
	webpack --watch

webpack-dev-server:
	./node_modules/webpack-dev-server/bin/webpack-dev-server.js

webpack-dev-server-inline:
	./node_modules/webpack-dev-server/bin/webpack-dev-server.js --inline

watch-src:
	find $(SRC) | entr sh -c 'make build'

