import {describe, expect, it} from 'vitest'
import contactReducer from '../src/frontpage/script/reducer-contact'

describe('Test Show contact reducer', function(){

	it('Can show and hide', function(){
		expect(
			contactReducer(true,{type:'TOGGLE_SHOW_CONTACT_INFO'})
		).toBe(false)

		expect(
			contactReducer(true,{type:'TOGGLE_SHOW_CONTACT_INFO'})
		).toBe(false)

	});
	it('Can handle other actions', function(){
		expect(
			contactReducer(undefined,{type:'SOMETHING_ELSE'})
		).toBe(false)
	});
});
