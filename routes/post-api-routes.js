module.exports = function(app) {


// POST route for saving a brewery as favorite
app.post("/api/favorites", function(req, res) {
    console.log(req.body);
    db.favorites.create({
      name: req.body.name,
      address: req.body.address,
     
    })
      .then(function(dbfavorites) {
        res.json(dbfavorites);
      });
  });


    
}