var express = require("express"),
      router = express(),
      jwt = require("jsonwebtoken"),
      dotenv = require("dotenv");
var ObjectId = require('mongodb').ObjectID;
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://ankitjangra:" + process.env.DB_KEY + "@" + process.env.DB_URL + "?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//writing the auth function for the functionality of middleware

const auth = async (req, res, next) => {
      try {
            console.log(req.cookies.jwt);
            if (req.cookies.jwt) {

                  const token = req.cookies.jwt;
                  console.log(token);
                  const verifyUser = jwt.verify(token, process.env.SECRET_KEY);
                  console.log(verifyUser);
                  let User;

                  await client.connect((err) => {
                        var db = client.db("Topology").collection("Users");
                        db.findOne({ _id: ObjectId(verifyUser._id) })
                              .then((response) => {
                                    console.log(response);
                                    if (response === null) {
                                          res.sendStatus(401);
                                    }
                                    else {
                                          req.body.token = token;
                                          req.body.user = response;
                                          next();
                                    }
                              })
                  })
            }
            else {
                  res.sendStatus(401);
            }


      } catch (error) {
            console.log(error);
            res.sendStatus(401);
      }
}
module.exports = auth;
