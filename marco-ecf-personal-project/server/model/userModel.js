
import { DataTypes } from 'sequelize';

const userSchema = {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

export default (sequelize) => {
  return sequelize.define('User', userSchema, {
    timestamps: true,
  });
};
