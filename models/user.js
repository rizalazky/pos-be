'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Role.hasMany(User,{
        foreignKey : 'id'
      })
      User.belongsTo(models.Role,{
        foreignKey : 'role_id'
      })
    }
  }
  User.init({
    usernamae: {
      type : DataTypes.STRING,
      allowNull:false,
      unique:true
    },
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
    role_id: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};