"use strict";

const firebase = require("firebase-admin");
const serviceAccount = require("../config/firebase.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL:
    "https://platzioverflow-6a725.firebaseio.com/",
});

const db = firebase.database();

const Users = require("./users");

module.exports = {
  users: new Users(db),
};
