import { isEmpty, get } from "lodash";
import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import UserDetail from "./user-detail";
import { getData } from "../shared/api/url-helper";
import { useRouter } from "next/router";


export default function GoogleUsers() {
  const GoogleApiId = "271691274679-b68pg6tkau84f4dbdkml0b2jp8cf96ba.apps.googleusercontent.com";
  const [userResponse, setUserResponse] = useState({});
  const router = useRouter();

  const fetch = async (response) => {
    const userMail = get(response, 'profileObj.email', "");
    const params = { email: userMail }
    const getUser = await getData('user/get-one-user', params);
    if (isEmpty(get(getUser, 'data.data', {}))) {
      setUserResponse(response);
    } else {
      localStorage.setItem("userInfo", get(getUser, 'data.data', {}));
      router.push("/explore");
    }
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