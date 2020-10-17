var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {


    //Search all breweries
    app.get("/api/breweries", function(req, res) {
       
        db.breweries.findAll({
          include: [db.breweries]
        }).then(function(dbbreweries) {
          res.json(dbbreweries);
        });
      });

        //Search single brewery
      app.get("/api/breweries/:id", function(req, res) {
      
        db.breweries.findOne({
          where: {
            id: req.params.id
          },
          include: [db.breweries]
        }).then(function(dbbreweries) {
          res.json(dbbreweries);
        });
      });

      app.post("/api/login", passport.authenticate("local"), function(req, res) {
        res.json(req.user);
      });

      app.post("/api/signup", function(req, res) {
        db.User.create({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        })
          .then(function() {
            res.redirect(307, "/api/login");
          })
          .catch(function(err) {
            res.status(401).json(err);
          });
      });

      app.get("/logout", function(req, res) {
        req.logout();
        res.redirect("/");
      });

      app.get("/api/user_data", function(req, res) {
        if (!req.user) {
          res.json({});
        } else {
          res.json({
            email: req.user.email,
            id: req.user.id
          });
        }
      });
    
}