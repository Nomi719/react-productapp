import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 
import { useState } from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../Utilities/firebase';

function Login() { 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSignInWithGoogle = ()=> {

        const provider = new GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        signInWithPopup(auth, provider)
  .then((result) => {
    console.log("result", result)
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log("user", user)
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log("error", errorCode, errorMessage)
    // ...
  });
    }


    return (
        <div className="login-container">
            <div className="login-form">
                <h2 className="login-title">Login</h2>
                <form>
                    <label htmlFor="email" className="login-label">Email:</label>
                    <input type="email" id="email" name="email" className="login-input" value={email} onChange={(e)=>setEmail(e.target.value)}/>

                    <label htmlFor="password" className="login-label">Password:</label>
                    <input type="password" id="password" name="password" className="login-input" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <Link to="/Signup" className="mr-5 hover:text-gray-900">
       Didnt have an account SignUp
          </Link>
                    <button type="submit" className="login-button">Login</button>
                    <h1 className='text-center my-2'>or</h1>
                    <button onClick={handleSignInWithGoogle} type="submit" className="login-button">Signin with Google</button>

                </form>
            </div>
        </div>
    );
}

export default Login;