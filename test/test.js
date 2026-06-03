import {describe, expect, it} from 'vitest'
import counterReducer from '../src/frontpage/script/reducer-counter'

describe('Test Frontpage counter reducer', function(){
	it('Can increment and decrement', function(){
		expect(
			counterReducer(0,{type:'INCREMENT'})
		).toBe(1)

		expect(
			counterReducer(1,{type:'INCREMENT'})
		).toBe(2)

		expect(
			counterReducer(2,{type:'DECREMENT'})
		).toBe(1)

		expect(
			counterReducer(1,{type:'DECREMENT'})
		).toBe(0)
	});
	it('Can handle other actions', function(){
		expect(
			counterReducer(undefined,{type:'SOMETHING_ELSE'})
		).toBe(0)
	});
});
