import React from "react";
import GoogleUsers from '../../components/google-oauth'

const Login = () => {

    return (
        <div>
            <div className="social-log-buttons">
                <span className="google-comps">
                    <GoogleUsers />
                </span>
            </div>
        </div>
    );
};

export default Login;
