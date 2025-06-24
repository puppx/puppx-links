const { sequelize } = require('../config/db');
const User = require('./User');
const Profile = require('./Profile');
const Link = require('./Link');

// Define associations
User.hasOne(Profile, { foreignKey: 'userId', onDelete: 'CASCADE' });
Profile.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(Link, { foreignKey: 'userId', onDelete: 'CASCADE' });
Link.belongsTo(User, { foreignKey: 'userId' });

// Sync all models with the database
const syncModels = async () => {
  try {
    await sequelize.sync({ alter: process.env.NODE_ENV === 'development' });
    console.log('Database models synchronized');
  } catch (error) {
    console.error('Error synchronizing models with database:', error);
  }
};

module.exports = {
  User,
  Profile,
  Link,
  syncModels
};
