import React, { useState, useEffect } from "react";
import { LoginBox, LoginHeading, LoginForm, EmailInput, PasswordInput, FormButton, NavLink, SignUpButton } from '../LogIn/LoginElement.js';
import { BrowserRouter as Router, Link, } from 'react-router-dom';
import { RegisterBox, Notification, ImageInput, RegisterForm, RegistserLabel, RegisterImage, NameInput, OtpInput } from './RegisterElement.js';
import '../LogIn/Login.css';
import './Register.css'
import axios from "axios";
import AddIcon from '@mui/icons-material/Add';
import { getTouchRippleUtilityClass } from '@mui/material';
function Register() {
      const [otpSent, setotpSent] = useState(true);
      const [otp, setOtpReal] = useState("");
      const [avatar, setavatar] = useState();
      const [orgEmail, setorgEmail] = useState("");
      function setOtp(e) {

            const otp = document.getElementById("OtpRegister");
            console.log(otp.style.disabled);
            setotpSent(false);
      }
      function ValidateEmail(mail) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
                  return (true)
            }
            return (false)
      }
      function ValidatePass(mail) {
            if (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(mail)) {
                  return (true)
            }
            return (false)
      }
      return (

            <div className="RegisterBox">
                  <RegisterBox>
                        <LoginHeading>REGISTER</LoginHeading>
                        <div id="registerNot"><Notification id="registerNotification">Your Email  is not valid</Notification></div>
                        <RegisterForm id="registerForm">
                              <div id="nameInputRegister">
                                    <NameInput typr="text" id="NameRegister" required={true} placeholder="Name"></NameInput>
                              </div>
                              <div id="EmailInput"> <EmailInput type="email" id="emailRegister" required={true} placeholder="E-mail" ></EmailInput></div>
                              <div id="ForgotLink" className="otpLink">
                                    <button onClick={

                                          (event) => {
                                                event.preventDefault();
                                                const email1 = document.getElementById("emailRegister").value;
                                                const result = ValidateEmail(email1);
                                                console.log(result);
                                                setorgEmail(email1);
                                                if (result === false) {
                                                      event.preventDefault();
                                                      document.getElementById("registerNotification").innerHTML = "Your email is not valid!";
                                                      document.getElementById("registerNot").style.height = "50px";
                                                      document.getElementById("registerNotification").style.opacity = "1";
                                                      document.getElementById("registerNotification").style.color = "red";
                                                      document.getElementById("registerNotification").style.borderColor = "red";

                                                }
                                                else {
                                                      const emailInput = document.getElementById("emailRegister").value;
                                                      setOtp(event.target);
                                                      const email = { email: emailInput }
                                                      axios.post("/otp", email, {
                                                            headers: {
                                                                  "Content-type": "application/json"
                                                            }
                                                      }).then((res, err) => {
                                                            setOtpReal(res.data)
                                                      })
                                                }

                                          }
                                    }>Send Otp</button>
                              </div>

                              <div id="PasswordInput"><PasswordInput minLength={6} maxLength={15} type="password" id="passwordRegister" required={true} placeholder="Password"></PasswordInput>
                                    <p>The Password must contain minimum 8 characters icluding Capital letter and numbers.</p>
                              </div>

                              <div id="otpInput"><OtpInput type="text" id="OtpRegister" placeholder="OTP" required={true} disabled={otpSent} ></OtpInput></div>
                              <div id="LoginFormButton"><a className="linkLink" href="/home"><FormButton type="submit" onClick={
                                    (event) => {
                                          const username1 = document.getElementById("NameRegister").value;
                                          const email1 = document.getElementById("emailRegister").value;
                                          const password1 = document.getElementById("passwordRegister").value;
                                          const OTP = document.getElementById("OtpRegister").value;
                                          if (username1 && email1 && password1 && OTP) {
                                                if (email1 === orgEmail) {


                                                      if (OTP === otp) {
                                                            const result = ValidateEmail(email1);
                                                            const resultPas = ValidatePass(password1);
                                                            console.log(email1)
                                                            console.log(orgEmail);
                                                            if (email1 === orgEmail) {
                                                                  console.log("Its true");
                                                            }

                                                            if (result === false) {
                                                                  event.preventDefault();
                                                                  document.getElementById("registerNotification").innerHTML = "Your email is not valid!";
                                                                  document.getElementById("registerNot").style.height = "50px";
                                                                  document.getElementById("registerNotification").style.opacity = "1";
                                                                  document.getElementById("registerNotification").style.color = "red";
                                                                  document.getElementById("registerNotification").style.borderColor = "red";
                                                            } else {
                                                                  if (resultPas === false) {
                                                                        event.preventDefault();
                                                                        document.getElementById("registerNotification").innerHTML = "Your password is not valid!";
                                                                        document.getElementById("registerNot").style.height = "50px";
                                                                        document.getElementById("registerNotification").style.opacity = "1";
                                                                        document.getElementById("registerNotification").style.color = "red";
                                                                        document.getElementById("registerNotification").style.borderColor = "red";
                                                                  }
                                                                  else {
                                                                        const User = {
                                                                              username: document.getElementById("NameRegister").value,
                                                                              email: document.getElementById("emailRegister").value,
                                                                              password: document.getElementById("passwordRegister").value

                                                                        };
                                                                        axios.post('/register', User, {
                                                                              headers: {
                                                                                    'Content-Type': 'application/json',
                                                                                    'Access-Control-Allow-Origin': "*",

                                                                              }
                                                                        }
                                                                        )
                                                                              .then((response) => {
                                                                                    if (response.status === 201) {
                                                                                          event.preventDefault();
                                                                                          document.getElementById("registerNotification").innerHTML = "User Registerd";
                                                                                          document.getElementById("registerNot").style.height = "50px";
                                                                                          document.getElementById("registerNotification").style.opacity = "1";
                                                                                          document.getElementById("registerNotification").style.color = "Green";
                                                                                          document.getElementById("registerNotification").style.borderColor = "green";
                                                                                    }
                                                                                    else {
                                                                                          event.preventDefault();
                                                                                          document.getElementById("registerNotification").innerHTML = "User already exists";
                                                                                          document.getElementById("registerNot").style.height = "50px";
                                                                                          document.getElementById("registerNotification").style.opacity = "1";
                                                                                          document.getElementById("registerNotification").style.color = "red";
                                                                                          document.getElementById("registerNotification").style.borderColor = "red";
                                                                                    }

                                                                              })
                                                                              .catch((err) => {
                                                                                    console.log(err);
                                                                              })
                                                                        event.preventDefault();
                                                                  }
                                                            }
                                                      }
                                                      else {
                                                            console.log("Otp Incorrect");
                                                            event.preventDefault();
                                                            document.getElementById("registerNotification").innerHTML = "Your otp is incorrect!";
                                                            document.getElementById("registerNot").style.height = "50px";
                                                            document.getElementById("registerNotification").style.opacity = "1";
                                                            document.getElementById("registerNotification").style.color = "red";
                                                            document.getElementById("registerNotification").style.borderColor = "red";
                                                      }
                                                }
                                                else {
                                                      event.preventDefault();
                                                      document.getElementById("registerNotification").innerHTML = "Your email isc ";
                                                      document.getElementById("registerNot").style.height = "50px";
                                                      document.getElementById("registerNotification").style.opacity = "1";
                                                      document.getElementById("registerNotification").style.color = "red";
                                                      document.getElementById("registerNotification").style.borderColor = "red";
                                                }
                                          }


                                          else {
                                                console.log("Not Running");
                                                event.preventDefault();
                                          }
                                    }

                              }>Submit</FormButton></a></div>
                              <h1 id="orLogin">OR</h1>

                        </RegisterForm>
                        <div id="SignUpFormButton"><a className="linkLink" href="/login"><SignUpButton>Sign In</SignUpButton></a></div>
                  </RegisterBox >
            </div >


      )
}

export default Register
