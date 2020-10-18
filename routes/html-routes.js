
const express = require('express');
const path = require("path");


module.exports = function(app) {

  app.get("/", function(req, res) {
    res.render("home");
  });

  app.get("/login", function(req, res) {
    res.render("login");
  });

  app.get("/signup", function(req, res) {
    res.render("signup");
  });

  app.get("/brewery", function(req, res) {
    res.render("brewery");
  });

  app.get("/results", function(req, res) {
    res.render("results");
  });

  app.get("/profile", function(req, res) {
    res.render("profile");
  });
    
}