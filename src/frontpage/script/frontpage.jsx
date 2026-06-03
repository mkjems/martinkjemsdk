
import React from 'react';
import ReactDOM from 'react-dom';

import Restofpage from '../components/rest-of-page';
import Burgermenu from '../components/burger-menu';

import '../styles/frontpage.css';

class Frontpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showContact: false
        };
    }

    toggleContactInfo = () => {
        this.setState((state) => ({
            showContact: !state.showContact
        }));
    };

    render() {
        return (
            <div>
                <Burgermenu />
                <Restofpage
                    showContact={this.state.showContact}
                    onContactClick={this.toggleContactInfo}
                />
            </div>
        );
    }
}

ReactDOM.render(<Frontpage />, document.getElementById('app'));
