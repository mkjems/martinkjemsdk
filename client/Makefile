
BUILD = ../client-build/

JSX_FILES           = $(shell find static -type f -name '*.jsx')
JS_FILES            = $(shell find static -type f -name '*.js')
CSS_FILES           = $(shell find static -type f -name '*.css')
HTML_FILES          = $(shell find static -type f -name '*.html')
VENDOR_FILES       = $(shell find vendor -type f -name '*.*')

D_JSX               = $(addprefix $(BUILD), $(addsuffix .js, $(basename $(JSX_FILES))))
D_JS                = $(addprefix $(BUILD), $(JS_FILES))
D_HTML              = $(addprefix $(BUILD), $(HTML_FILES))
D_CSS               = $(addprefix $(BUILD), $(CSS_FILES))
D_VENDOR	 		= $(addprefix $(BUILD)static/, $(VENDOR_FILES))

build-jsx: $(D_JSX)
copy-html: $(D_HTML)
copy-css: $(D_CSS)
copy-js: $(D_JS)
copy-vendor: $(D_VENDOR)

copy-favion:
	cp static/cartrace/favicon.ico $(BUILD)static/cartrace/favicon.ico

$(BUILD)static/vendor/%: vendor/%
	mkdir -p $(dir $@)
	cp $? $@

$(BUILD)%.js: %.jsx
	mkdir -p $(dir $@)
	jsx $? > $@

$(BUILD)%.js: %.js
	mkdir -p $(dir $@)
	cp $? $@

$(BUILD)%.html: %.html
	mkdir -p $(dir $@)
	cp $? $@

$(BUILD)%.css: %.css
	mkdir -p $(dir $@)
	cp $? $@

clean:
	rm -rf $(BUILD)*

build: build-jsx copy-js copy-html copy-css copy-favion copy-vendor

watch-static:
	find static/ | entr sh -c 'make build'

