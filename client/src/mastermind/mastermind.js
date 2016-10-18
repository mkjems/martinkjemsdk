import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';

import reducer from './reducers';
import './style/mastermind.scss';
import App from './containers/App';
import { loadState, saveState } from './script/localStorage';

const store = createStore(reducer, loadState())

const renderFunc = () => {
    render(<App dispatch={store.dispatch} getState={store.getState} />, document.getElementById('app') );
};

store.subscribe(renderFunc)

store.subscribe(()=>{
	saveState(store.getState());
});

renderFunc();

