import expect from 'expect.js'
import contactReducer from '../src/frontpage/script/reducer-contact'

describe('Test Show contact reducer', function(){

	it('Can show and hide', function(){
		expect(
			contactReducer(true,{type:'TOGGLE_SHOW_CONTACT_INFO'})
		).to.equal(false)

		expect(
			contactReducer(true,{type:'TOGGLE_SHOW_CONTACT_INFO'})
		).to.equal(false)

	});
	it('Can handle other actions', function(){
		expect(
			contactReducer(undefined,{type:'SOMETHING_ELSE'})
		).to.equal(false)
	});
});