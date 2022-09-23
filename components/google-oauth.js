import { isEmpty } from "lodash";
import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import UserDetail from "./user-detail";

export default function GoogleUsers() {
  const GoogleApiId = "271691274679-b68pg6tkau84f4dbdkml0b2jp8cf96ba.apps.googleusercontent.com";
  const [userResponse, setUserResponse] = useState(false);

  const fetch = (response) => {
    setUserResponse(response);
  }

  return (
    <>
      {isEmpty(userResponse) ? (
        <>
          <div className="sign-up-login">
            Sign Up/Login
          </div>
          <GoogleLogin
            clientId={GoogleApiId}
            render={renderProps => (
              <button
                type="button"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="googlelogin-btn"
              >
                <img
                  src="/assets/googleLogo.png"
                  alt="google"
                  className="googleicon-login"
                />
                Sign in with Google
              </button>
            )}
            buttonText="Google"
            onSuccess={fetch}
            cookiePolicy="single_host_origin"
          />
        </>
      ) : (
        <UserDetail userResponse={userResponse} />
      )}
    </>
  );
}