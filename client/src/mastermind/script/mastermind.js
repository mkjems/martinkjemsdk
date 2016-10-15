import React from 'react';
import ReactDOM from 'react-dom';

import './../style/mastermind.scss';

import {createStore} from 'redux';
import reducer from './reducer';

import App from './App'

const store = createStore(reducer)

const render = () => {
    ReactDOM.render(<App dispatch={store.dispatch} getState={store.getState} />, document.getElementById('app') );
};

store.subscribe(render)
render();

store.dispatch({
	type: 'BEGIN_NEW_GAME'
})