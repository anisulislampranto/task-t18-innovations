import React from "react";
import "./SignInCard.css";

const SignInCard = () => {
  return (
    <div className="sign-in-card">
      <div style={{ display: "flex" }}>
        <div>
          <h4>Welcome to Lorem</h4>
          <h1>Sign In</h1>
        </div>
        <div>
          <p>
            No Account?
            <br />
            Sign Up
          </p>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <p>ICon google</p>
        <p>ICon facebook</p>
        <p>ICon Apple Store</p>
      </div>
      <form action="">
        <label htmlFor="username">Enter Your Username or Email Address</label>
        <input type="text" placeholder="username or email address" />
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="password" />
        <input type="button" value="Submit" />
      </form>
    </div>
  );
};

export default SignInCard;
