import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const SignIn = () => {
  const clientId = process.env.REACT_APP_GOOGLE_CLOUD_CLIENT_ID;

  const handleSuccess = (credentialResponse) => {
    console.log("Google SignIn Success: ", credentialResponse); 

    // Send this credential response to backend api and authenticate
    // By using jwt decode, you are also authenticate the user on frontend

    const decode = jwtDecode(credentialResponse?.credential)
    console.log("Decode: ", decode)

    // Now send the decode value in backend api and authenticate the user.

  };

  const handleError = () => {
    console.log("Google SignIn Error");
  };

  return (
    <div>
      <h1> Sign In </h1>

      {clientId ? (
        <GoogleOAuthProvider clientId={clientId}>
          <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
        </GoogleOAuthProvider>
      ) : (
        <p>Google client ID not found</p>
      )}
    </div>
  );
};

export default SignIn;
