import React from "react";
import GoogleUsers from './google-oauth'

const Login = () => {

    return (
        <div>
            <div style={{
                color: 'blue', fontSize: 25,
                textAlign: 'center', fontWeight: 'bold', margin: 25
            }}>
                Sign Up/Login
            </div>
            <div className="social-log-buttons">
                <span className="google-comps">
                    <GoogleUsers />
                </span>
            </div>
        </div>
    );
};

export default Login;
