const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const { getUsers, getUserById, updateUser, deleteUser, updatePassword } = require('../controllers/users');
const { protect, admin } = require('../middleware/auth');

// @route   GET /api/users
// @desc    Get all users
// @access  Private/Admin
router.get('/', protect, admin, getUsers);

// @route   GET /api/users/:id
// @desc    Get user by ID
// @access  Private/Admin
router.get('/:id', protect, admin, getUserById);

// @route   PUT /api/users/:id
// @desc    Update user
// @access  Private/Admin
router.put(
  '/:id',
  [
    protect,
    admin,
    check('email', 'Please include a valid email').optional().isEmail(),
    check('username', 'Username is required').optional().not().isEmpty(),
  ],
  updateUser
);

// @route   DELETE /api/users/:id
// @desc    Delete user
// @access  Private/Admin
router.delete('/:id', protect, admin, deleteUser);

// @route   PUT /api/users/password
// @desc    Update password
// @access  Private
router.put(
  '/password',
  [
    protect,
    check('currentPassword', 'Current password is required').exists(),
    check('newPassword', 'Please enter a new password with 6 or more characters').isLength({ min: 6 }),
  ],
  updatePassword
);

// Export the router
module.exports = router;
