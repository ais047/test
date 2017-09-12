module.exports = function(sequelize, DataType){
  var User = sequelize.define("User", {
    user: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    password: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  })
  return User
};