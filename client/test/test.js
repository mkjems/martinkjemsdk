import expect from 'expect.js'
import counterReducer from '../src/frontpage/script/reducer-counter'

describe('Test Frontpage counter reducer', function(){
	it('Can increment and decrement', function(){
		expect(
			counterReducer(0,{type:'INCREMENT'})
		).to.equal(1)

		expect(
			counterReducer(1,{type:'INCREMENT'})
		).to.equal(2)

		expect(
			counterReducer(2,{type:'DECREMENT'})
		).to.equal(1)

		expect(
			counterReducer(1,{type:'DECREMENT'})
		).to.equal(0)
	});
	it('Can handle other actions', function(){
		expect(
			counterReducer(undefined,{type:'SOMETHING_ELSE'})
		).to.equal(0)
	});
});

