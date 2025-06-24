const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Link = sequelize.define('Link', {
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
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isUrl: true,
      notEmpty: true
    }
  },
  icon: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'faLink'
  },
  iconType: {
    type: DataTypes.ENUM('solid', 'brands', 'regular'),
    allowNull: false,
    defaultValue: 'solid'
  },
  position: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  clicks: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  lastClicked: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  timestamps: true,
  indexes: [
    {
      fields: ['userId', 'position']
    }
  ]
});

module.exports = Link;
