import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';

import reducer from './reducers';
import './style/mastermind.scss';
import App from './script/App'

const store = createStore(reducer)

const renderFunc = () => {
    render(<App dispatch={store.dispatch} getState={store.getState} />, document.getElementById('app') );
};

store.subscribe(renderFunc)

store.dispatch({
	type: 'BEGIN_NEW_GAME'
})
