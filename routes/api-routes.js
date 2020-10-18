var db = require("../models");
var passport = require("../config/passport");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;



module.exports = function(app) {

 //Search all breweries
    
 app.get("/api/brewery", function (req, res) {

  db.Brewery.findAll({

  }).then(function (dbbreweries) {
    res.json(dbBrewery);

  });
});

    //Search single brewery
  
    app.get("/api/brewery/:city", function (req, res) {

      db.Brewery.findAll({
        where: {
            city: {
              [Op.like]: '%' + req.params.city + '%'
            }
        },
        attributes: ['name', 'city', 'address', 'phonenumber'],
      }).then(function (dbBrewery) {
        res.json(dbBrewery);
  
      });
    });

  //User Sign up and Login
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