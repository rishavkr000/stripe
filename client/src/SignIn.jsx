import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const SignIn = () => {
  const googleClientId = process.env.REACT_APP_GOOGLE_CLOUD_CLIENT_ID;
  const microsoftClientId = 'e58432d7-4b6e-48c5-91fa-2cf1bad3597c';

  const handleGoogleSuccess = (credentialResponse) => {
    console.log("Google SignIn Success: ", credentialResponse); 

    // Send this credential response to backend api and authenticate
    // By using jwt decode, you are also authenticate the user on frontend

    const decode = jwtDecode(credentialResponse?.credential)
    console.log("Decode: ", decode)

    // Now send the decode value in backend api and authenticate the user.

  };

  const handleGoogleError = () => {
    console.log("Google SignIn Error");
  };

  const handleMicrosoftLogin = () => {
    const redirectUri = "http://localhost:3000"; // Match this to your Azure app redirect URI
    const microsoftOAuthUrl = `https://login.microsoftonline.com/d820d37a-b06b-4e39-92c5-1b75b5da95f1/oauth2/v2.0/authorize?client_id=${microsoftClientId}&response_type=code&redirect_uri=${redirectUri}&response_mode=query&scope=openid%20profile%20email&state=12345`;

    window.location.href = microsoftOAuthUrl;
  };

  return (
    <div>
      <h1> Sign In </h1>

      {googleClientId ? (
        <GoogleOAuthProvider clientId={googleClientId}>
          <GoogleLogin onSuccess={handleGoogleSuccess} onError={handleGoogleError} />
        </GoogleOAuthProvider>
      ) : (
        <p>Google client ID not found</p>
      )}

      <button onClick={handleMicrosoftLogin} style={{ marginTop: "10px", padding: "10px 20px" }}>
        Sign Up with Microsoft
      </button>

    </div>
  );
};

export default SignIn;
