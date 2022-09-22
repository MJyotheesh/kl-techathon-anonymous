import React from "react";
import GoogleLogin from "react-google-login";

export default function GoogleUsers() {
  const GoogleApiId = "271691274679-b68pg6tkau84f4dbdkml0b2jp8cf96ba.apps.googleusercontent.com";

  const fetch = (response) => {
    console.log(response);
    //fetchGoogleUser(response, fresh_chat)
  }

  return (
    <GoogleLogin
      clientId={GoogleApiId}
      render={renderProps => (
        <button
          type="button"
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        // className="googlelogin-btn"
        >
          {/* <img
            src="/assets/googleLogo.png"
            alt="emptyBag"
            className="googleicon-login"
          /> */}
          Google
        </button>
      )}
      buttonText="Google"
      onSuccess={fetch}
      cookiePolicy="single_host_origin"
    />
  );
}