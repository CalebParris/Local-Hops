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


    
}