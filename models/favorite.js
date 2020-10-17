module.exports = function(sequelize, DataTypes) {
    var Favorite = sequelize.define("Favorite", {
     
    lat: {
        type: DataTypes.STRING
    },
    long: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING
    }, 
    address: {
        type: DataTypes.STRING
    }, 
    city: {
        type: DataTypes.STRING
    }, 
    state: {
        type: DataTypes.STRING
    },
    phonenumber: {
        type:DataTypes.STRING
    },
    brewerytype: {
        type: DataTypes.STRING
    }
    });
    return Favorite;
  };
  