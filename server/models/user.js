const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class User extends Model {}

  User.init(
    {
      name: { 
        type: DataTypes.STRING, 
        allowNull: false 
      },
      email: { 
        type: DataTypes.STRING, 
        allowNull: false, 
        unique: true,
        validate: { isEmail: true }
      },
      password: { 
        type: DataTypes.STRING, 
        allowNull: false 
      },
      lastLogin: { 
        type: DataTypes.DATE 
      },
      status: { 
        type: DataTypes.STRING, 
        defaultValue: "active" 
      }
    },
    {
      sequelize,
      modelName: "User"
    }
  );

  return User;
};

