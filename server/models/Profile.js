const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Profile = sequelize.define('Profile', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id'
    }
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  bio: {
    type: DataTypes.STRING(500),
    allowNull: true
  },
  avatar: {
    type: DataTypes.STRING,
    allowNull: true
  },
  theme: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: {
      primaryColor: 'teal',
      backgroundColor: 'bg-gray-100',
      darkModeBackground: 'bg-gray-900',
      textColor: 'text-gray-800',
      darkModeTextColor: 'text-gray-100',
      linkCardStyle: 'rounded-lg',
      animation: 'hover:scale-105'
    }
  },
  socialStats: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: {
      followers: 0,
      projects: 0
    }
  },
  location: {
    type: DataTypes.STRING,
    allowNull: true
  },
  website: {
    type: DataTypes.STRING,
    allowNull: true
  },
  customDomain: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true
  }
}, {
  timestamps: true
});

module.exports = Profile;
