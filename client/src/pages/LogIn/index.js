import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import "./style.css";

export default function Login() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [container, setContainer] = useState("container");

  // signUpButton.addEventListener("click", () => {
  //   container.classList.add("right-panel-active");
  // });

  // signInButton.addEventListener("click", () => {
  //   container.classList.remove("right-panel-active");
  // });

  return (
    <div>
      <div class={container} id="container">
        <div class="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <div class="social-container">
              <a href="# " class="social">
                <i class="fa fa-facebook"></i>
              </a>
              <a href="# " class="social">
                <i class="fa fa-google"></i>
              </a>
              <a href="# " class="social">
                <i class="fa fa-linkedin"></i>
              </a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        </div>
        <div class="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            <div class="social-container">
              <a href="# " class="social">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="# " class="social">
                <i class="fab fa-google-plus-g"></i>
              </a>
              <a href="# " class="social">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="# ">Forgot your password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                class="ghost"
                onClick={() => setContainer("container ")}
                id="signIn"
              >
                Sign In
              </button>
            </div>
            <div class="overlay-panel overlay-right">
              <h1>Hello, Alan, Matt, Eric, and Pavel!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                class="ghost"
                onClick={() => setContainer("container right-panel-active")}
                id="signUp"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
