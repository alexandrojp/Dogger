import React from 'react';
import FormSignUp from "../components/FormSignUp";
import profile from '../assets/static/profile.png';

class SingUp extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="col-6">
                    <FormSignUp />
                </div>
                <div className="col-6">
                    <img src={profile} alt="Dog owner profile"/>
                    <h3>Dog owner</h3>
                </div>
            </div>
        )
    }
}

export default SingUp