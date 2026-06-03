import React from 'react';

class Burgermenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    toggleMenu = () => {
        this.setState((state) => ({
            isOpen: !state.isOpen
        }));
    };

    closeMenu = () => {
        this.setState({
            isOpen: false
        });
    };

    render() {
        return (
            <nav className="site-menu">
                <button
                    className="site-menu-button"
                    type="button"
                    aria-label="Menu"
                    aria-expanded={this.state.isOpen}
                    onClick={this.toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div className={this.state.isOpen ? 'site-menu-panel site-menu-panel-open' : 'site-menu-panel'}>
                    <a className="menu-item" href="/mastermind/" onClick={this.closeMenu}>Mastermind</a>
                </div>
            </nav>
        );
    }
}

export default Burgermenu;
