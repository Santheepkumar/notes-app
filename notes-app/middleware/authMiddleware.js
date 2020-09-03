const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const path = require("path");
const { secret } = require("../config");

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, secret, (err, decodedToken) => {
      if (err) {
        res.status(400).json({ err });
      } else {
        next();
      }
    });
  } else {
    res.status(400).json({ error: "Authentication Required" });
  }
};

// check current user
const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, secret, async (err, decodedToken) => {
      if (err) {
        res.locals.user = null;
        next();
      } else {
        let user = await User.findById(decodedToken.id);
        res.locals.user = user;
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};
const getCurrentUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, secret, async (err, decodedToken) => {
      if (err) {
        next();
      } else {
        let user = await User.findById(decodedToken.id);
        req.user = { _id: user._id, email: user.email };
        next();
      }
    });
  } else {
    next();
  }
};

module.exports = { requireAuth, checkUser, getCurrentUser };
