// Dependencies
// =============================================================

module.exports = function(sequelize, DataTypes) {
//Create the "Entry" model that matches with the DB
var Entry = sequelize.define("entry", {
    hour: DataTypes.INTEGER ,
    description: DataTypes.STRING,
    created_at: DataTypes.DATE
});
    return Entry;
}


