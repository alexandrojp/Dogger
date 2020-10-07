import React from 'react';
import FormSignUp from "../components/FormSignUp";
import profile from '../assets/static/profile.png';
import '../assets/styles/pages/SignUp.scss';

class SingUp extends React.Component {
    render() {
        return (
            <div className="container FormSignUp">
                <div className="row">
                    <div className="col-6">
                        <FormSignUp />
                    </div>
                    <div className="col-6 FormSignUp__Avatar">
                        <img src={profile} alt="Dog owner profile" 
                            className="rounded-circle FormSignUp__Avatar-img" />
                        <h2 className="text-center font-weight-bold FormSignUp__Avatar-title">Dog owner</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default SingUp