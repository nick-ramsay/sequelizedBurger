/*const orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    insertOne: function(vals, cb) {
      orm.insertOne("burgers", "burger_name", vals, function(res) {
        cb(res);
      });
    },
    updateOne: function(table, updateColumn, newValue,targetColumn,targetValue,cb) {
      orm.updateOne(table, updateColumn, newValue, targetColumn,targetValue, function(res) {
        cb(res);
      });
    }
  };

  module.exports = burger;*/

module.exports = function (sequelize, DataTypes) {

  var Burger = sequelize.define("Burgers", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  });
  return Burger;
};
