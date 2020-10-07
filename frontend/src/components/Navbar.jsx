import React from 'react';
import '../assets/styles/components/Navbar.scss';
import logoDogger from '../assets/static/logoDogger.png';
import { Link } from 'react-router-dom';

class Nabvar extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            logged: false
        }
    }

    render() {
        return(
            <header className="header header--background-primary">
                <img className="header__img" src={logoDogger} alt="Dogger logo" />
                <div className="">

                </div>
                <div className="header__menu">
                    <Link className="btn-custom" to="/">
                        Sign in
                    </Link>
                    <Link className="btn-dog-secondary" to="/signup">
                        Sign up
                    </Link>
                    { this.state.logged && (
                        <React.Fragment>
                            <div className="header__menu--profile">
                                <img src="https://lh3.googleusercontent.com/ogw/ADGmqu9nHxJtHrRv7bs95Cimpua56cghNB9NDgPQbL0c=s32-c-mo" alt="Profile" />
                                <h3>Jhon Doe</h3>
                            </div>
                            <ul>
                                <li><a href="/">Account</a></li>
                                <li><a href="/">Logout</a></li>
                            </ul>
                        </React.Fragment>
                    )}
                </div>
            </header>
        )
    }
}

export default Nabvar