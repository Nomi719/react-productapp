import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 
function Signup() {
    return (
        <div className="signup-container">
            <form className="signup-form">
            <h2 className="signup-title">Sign Up</h2>

                <label htmlFor="username" className="signup-label">Username:</label>
                <input type="text" id="username" name="username" className="signup-input" />

                <label htmlFor="email" className="signup-label">Email:</label>
                <input type="email" id="email" name="email" className="signup-input" />

                <label htmlFor="password" className="signup-label">Password:</label>
                <input type="password" id="password" name="password" className="signup-input" />
                <Link to="/Signin" className="mr-5 hover:text-gray-900">Already have an account Login
          </Link>
                <button type="submit" className="signup-button">Sign Up</button>
            </form>
        </div>
    );
}

export default Signup;