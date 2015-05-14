var assert = require('assert')

describe('Basic testing', function(){

	it('The first test', function(done){
		assert.equal('hello', 'hello');
		done();
	});

	it('The second test', function(){
		assert.equal('hello', 'hello');
	});

});
