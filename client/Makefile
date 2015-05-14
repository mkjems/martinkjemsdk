
JSX_FILES           = $(shell find static -type f -name '*.jsx')
JS_FILES            = $(shell find static -type f -name '*.js')
CSS_FILES           = $(shell find static -type f -name '*.css')
HTML_FILES          = $(shell find static -type f -name '*.html')

D_JSX               = $(addprefix build/, $(addsuffix .js, $(basename $(JSX_FILES))))
D_JS                = $(addprefix build/, $(JS_FILES))
D_HTML              = $(addprefix build/, $(HTML_FILES))
D_CSS               = $(addprefix build/, $(CSS_FILES))

build-jsx: $(D_JSX)
copy-html: $(D_HTML)
copy-css: $(D_CSS)
copy-js: $(D_JS)

build/%.js: %.jsx
	mkdir -p $(dir $@)
	jsx $? > $@

build/%.js: %.js
	mkdir -p $(dir $@)
	cp $? $@

build/%.html: %.html
	mkdir -p $(dir $@)
	cp $? $@

build/%.css: %.css
	mkdir -p $(dir $@)
	cp $? $@

clean-build:
	rm -rf build/*

build: build-jsx copy-js copy-html copy-css

watch-static:
	find static/ | entr sh -c 'make build'
