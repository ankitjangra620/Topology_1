import React from 'react';
import { LoginBox, LoginHeading, LoginForm, EmailInput, PasswordInput, FormButton, NavLink, SignUpButton } from './LoginElement.js';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Notification } from '../Register/RegisterElement.js';
import './Login.css';
import axios from 'axios';
function Login() {
      function ValidateEmail(mail) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
                  return (true)
            }
            return (false)
      }
      return (
            <div className="login">
                  <LoginBox>
                        <LoginHeading>SIGN IN</LoginHeading>
                        <LoginForm>
                              <div id="registerNot"><Notification id="registerNotification">Your Email  is not valid</Notification></div>
                              <div id="EmailInput"> <EmailInput type="email" id="emailLogin" required={true} placeholder="E-mail" ></EmailInput></div>
                              <div id="PasswordInput"><PasswordInput id="passwordLogin" id="passwordLogin" type="password" required={true} placeholder="Password"></PasswordInput></div>
                              <div id="ForgotLink">

                                    <a id="forgotButton" href="/forgot" >Forgot Password</a>

                              </div>
                              <div id="LoginFormButton"><a className='linkLink' href="/home" ><FormButton type="submit" onClick={(event) => {
                                    const email = document.getElementById("emailLogin").value;
                                    const password = document.getElementById("passwordLogin").value;
                                    const user = {
                                          email: email,
                                          password: password
                                    }
                                    if (ValidateEmail(email)) {
                                          event.preventDefault();
                                          if (email && password) {

                                                axios.post("/login", user, {
                                                      headers: {
                                                            "Content-Type": "application/json",
                                                            "Access-Control-Allow-Origin": "*"
                                                      }
                                                })
                                                      .then((response, err) => {
                                                            if (response.status === 200) {
                                                                  document.getElementById("registerNotification").innerHTML = "User credentials invalid!";
                                                                  document.getElementById("registerNot").style.height = "50px;"
                                                                  document.getElementById("registerNotification").style.opacity = "1";
                                                                  document.getElementById("registerNotification").style.color = "red";
                                                                  document.getElementById("registerNotification").style.borderColor = "red";
                                                            }
                                                            else {
                                                                  event.preventDefault();

                                                                  document.getElementById("registerNotification").innerHTML = "Logged In!";
                                                                  document.getElementById("registerNot").style.height = "50px";
                                                                  document.getElementById("registerNotification").style.opacity = "1";
                                                                  document.getElementById("registerNotification").style.color = "Green";
                                                                  document.getElementById("registerNotification").style.borderColor = "green";


                                                            }
                                                            console.log(err);
                                                      })

                                          }
                                          else {
                                                event.preventDefault();
                                                document.getElementById("registerNotification").innerText = "Please fill out the fields!";
                                                document.getElementById("registerNot").style.height = "50px";
                                                document.getElementById("registerNotification").style.color = "red";
                                                document.getElementById("registerNotification").style.borderColor = "red";
                                                document.getElementById("registerNotification").style.opacity = "1";

                                          }
                                    }
                                    else {
                                          document.getElementById("registerNotification").innerText = "Email is invalid!";
                                          document.getElementById("registerNot").style.height = "50px";
                                          document.getElementById("registerNotification").style.color = "red";
                                          document.getElementById("registerNotification").style.borderColor = "red";
                                          document.getElementById("registerNotification").style.opacity = "1";

                                    }
                              }}>Submit</FormButton></a></div>
                              <h1 id="orLogin">OR</h1>

                        </LoginForm>
                        <div id="SignUpFormButton"><a className='linkLink' href="/register"><SignUpButton>Sign Up</SignUpButton></a></div>
                  </LoginBox>
            </div>
      )
}

export default Login
