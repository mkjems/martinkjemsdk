
import React from 'react';
import ReactDOM from 'react-dom';

import Restofpage from '../components/rest-of-page';
import Burgermenu from '../components/burger-menu';

import '../styles/frontpage.scss';

import {createStore} from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

const render = () => {
    const state = store.getState()
    const onContactClick = () =>
                    store.dispatch({
                        type: 'TOGGLE_SHOW_CONTACT_INFO'
                    })

    ReactDOM.render(
        <div>
            <Burgermenu onContactClick = {onContactClick} />
            <Restofpage
                showContact={state.showContact}
                counterVal={state.counterVal}
                increment = {() =>
                    store.dispatch({
                        type: 'INCREMENT'
                    })
                }
                decrement = {() =>
                    store.dispatch({
                        type: 'DECREMENT'
                    })
                }
                onContactClick = {onContactClick}
            />
        </div>,
        document.getElementById('app')
    );
};

store.subscribe(render);

render();
