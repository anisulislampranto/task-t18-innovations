import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./SignInCard.css";
import {
  faApple,
  faFacebook,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

const SignInCard = () => {
  return (
    <div className="sign-in-card">
      <div className="d-flex justify-content-between">
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
      <div className="d-flex my-3">
        <p>
          <FontAwesomeIcon icon={faGoogle} /> Sign in With Google
        </p>
        <p>
          <FontAwesomeIcon icon={faFacebook} />
        </p>
        <p>
          <FontAwesomeIcon icon={faApple} />
        </p>
      </div>
      <form action="">
        <div class="form-group">
          <label for="exampleInputEmail1">Enter Your Email address</label>
          <input
            style={{ width: "100%", height: "50px" }}
            type="email"
            class="form-control my-3"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Username or email address"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Enter Password</label>
          <input
            style={{ width: "100%", height: "50px" }}
            type="password"
            class="form-control my-3"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <a className="text-blue text-decoration-none text-end my-3" href="">
          Forget Password
        </a>
        <button
          style={{ width: "100%", height: "50px" }}
          type="submit"
          class="btn btn-primary my-3"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignInCard;
