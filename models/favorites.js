module.exports = function(sequelize, DataTypes) {
    var favorites = sequelize.define("favorites", {
     
    lat: {
        type: DataTypes.DECIMAL
    },
    long: {
        type: DataTypes.DECIMAL
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
    },
    score: {
        type: DataTypes.STRING
    }

    });
    return favorites;
  };
  