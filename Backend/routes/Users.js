var express = require("express"),
      router = express.Router(),
      nodemailer = require("nodemailer"),
      bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
//including the bcryptjs to hash our password in my app
const bcrypt = require("bcryptjs");
//including the dotenv module
const dotenv = require('dotenv');
//including the cookie-parser package to read the cookies of user browser
const cookieParser = require("cookie-parser");
dotenv.config();
// auth router attaches /login, /logout, and /callback routes to the baseURL
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }))
//Making the express tell to use the cookkie parser
router.use(cookieParser());
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://ankitjangra:" + process.env.DB_KEY + "@" + process.env.DB_URL + "?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const auth = require("../middlewares/auth.js");
router.get("/secret", auth, (req, res) => {
      res.send("Middleware is running fine");
})
function randomOtpGenrate() {
      var string = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      var len = string.length;
      console.log(len);
      var otp = "";
      for (var i = 0; i < 6; i++) {
            otp += string[Math.floor(Math.random() * len)]

      }
      return otp;
}
//Send Email
function sendEmail(email, otp) {
      let transporter = nodemailer.createTransport({
            service: 'gmail',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                  user: "19001001005ankit@dcrustm.org", // generated ethereal user
                  pass: "Ankit#12345", // generated ethereal password
            },
      });
      const data = {
            from: "ankitjangra620@gmail.com",
            to: email,
            subject: "Otp for Topology Email Veification : ",
            text: "Your One time password for LogIn is -- ",
            html: "<h1>" + otp + "<h1><p>This is only valid for 5 minutes. </p>",
      };
      transporter.sendMail(data)
            .then((res, err) => {
                  console.log(err);
                  console.log(res);

            })
}
//function to update password
async function updatePassword(email, pass) {
      console.log("update");
      const hashedPass = await bcrypt.hash(pass, 10);
      client.connect((err) => {
            const findingUser = { email: email };
            var db = client.db("Topology").collection("Users");

            db.findOneAndUpdate(findingUser, { $set: { password: hashedPass } })
                  .then((response, err) => {
                        console.log(err);
                        console.log(response);
                  })
      })

}
//logout route
router.get("/logout", auth, async (req, res) => {
      try {
            console.log("Logout Sucessfully")
            res.clearCookie("jwt");
            res.sendStatus("200");
      } catch (error) {
            console.log(error);
      }
})
//otp request
router.post("/otp", async function (req, res, next) {
      const email = req.body.email;
      console.log(email);
      const otp = randomOtpGenrate();
      console.log(otp);
      sendEmail(email, otp)
      res.send(otp);

})
const digestPassword = async (password, hashedPassword) => {
      //.compare is used for encrypting and comparing
      const hashMatchedPass = await bcrypt.compare(password, hashedPassword)
      console.log("Matching Password results -- >" + hashMatchedPass);
      return hashMatchedPass;
}
router.post("/login", async function (req, res) {
      console.log("Login request");
      const user = {
            email: req.body.email
      }
      client.connect((err) => {
            var db = client.db("Topology").collection("Users");
            db.findOne(user)
                  .then(async (response) => {
                        console.log(response);
                        if (response != null) {
                              resPass = response.password;
                              const hashMatchedPass = await bcrypt.compare(req.body.password, resPass)
                              const id = response._id.toString();
                              console.log(id);
                              const token = jwt.sign({ _id: id }, process.env.SECRET_KEY);
                              console.log(token);
                              db.findOneAndUpdate({ email: req.body.email }, { $push: { tokens: token } })
                                    .then((response) => {
                                          console.log(response);
                                    })
                              res.cookie("jwt", token, {
                                    expires: new Date(Date.now() + 3600000 * 24 * 15),
                                    httpOnly: true
                              })

                              if (hashMatchedPass) {
                                    res.sendStatus(200);
                              }
                              else {
                                    res.sendStatus(202);
                              }
                        }
                        else {
                              res.sendStatus(202);
                        }
                  })
                  .catch(err => {
                        console.log(err);
                  })
      });


})
//---------------------------------
//Login router ends at this position
//Forgot password route

router.post("/forgot", async function (req, res, next) {
      const email = req.body.email;
      const password = req.body.password;
      console.log(email);
      client.connect((err) => {
            const findingUser = { email: email };
            var db = client.db("Topology").collection("Users");
            db.findOne(findingUser)
                  .then((response) => {
                        console.log(response);
                        if (response === null) {
                              res.sendStatus(201);
                        }
                        else {
                              updatePassword(email, password);
                              res.sendStatus(200);
                        }

                  })
      })


})

router.post("/register", async function (req, res, next) {
      let token;
      console.log("REquest");
      const username = req.body.username, password = req.body.password, email = req.body.email;
      client.connect(async (err) => {
            const findingUser = { email: email };
            var db = client.db("Topology").collection("Users");

            db.findOne(findingUser)
                  .then(async (response) => {
                        console.log(response);
                        if (response === null) {
                              const hashedPass = await bcrypt.hash(password, 10);
                              console.log("hashedPass --->  ", hashedPass);

                              const usermain = {
                                    username: username,
                                    email: email,
                                    password: hashedPass,
                                    tokens: []
                              };
                              let User;
                              client.connect((err) => {
                                    var db = client.db("Topology").collection("Users");
                                    console.log("Creating new user");
                                    db.insertOne(usermain)
                                          .then((res1) => {
                                                const id = res1.insertedId.toString();
                                                console.log(id);
                                                token = jwt.sign({ _id: id }, process.env.SECRET_KEY);
                                                console.log("1");
                                                console.log(token);
                                                //Creating the cookie 

                                                //Cookie set
                                                db.findOneAndUpdate({ email: email }, { $push: { tokens: token } })
                                                      .then((response1) => {
                                                            console.log(token)
                                                            res.cookie("jwt", token, {
                                                                  expires: new Date(Date.now() + 3600000 * 24 * 15),
                                                                  httpOnly: true
                                                            })
                                                            res.sendStatus(201)
                                                      })

                                          })
                                          .catch(err => {

                                          })
                              })




                        }
                        else {
                              res.sendStatus(400);
                        }

                  })
                  .catch(err => {

                  })
      })

})
module.exports = router;