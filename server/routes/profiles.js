const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const { getMyProfile, getProfileByUsername, updateProfile, updateTheme } = require('../controllers/profiles');
const { protect } = require('../middleware/auth');

// @route   GET /api/profiles/me
// @desc    Get current user's profile
// @access  Private
router.get('/me', protect, getMyProfile);

// @route   GET /api/profiles/:username
// @desc    Get profile by username
// @access  Public
router.get('/:username', getProfileByUsername);

// @route   PUT /api/profiles
// @desc    Update user's profile
// @access  Private
router.put(
  '/',
  [
    protect,
    check('name', 'Name cannot be empty if provided').optional().not().isEmpty(),
    check('bio', 'Bio cannot be empty if provided').optional().not().isEmpty(),
    check('website', 'Website must be a valid URL if provided').optional().isURL(),
  ],
  updateProfile
);

// @route   PUT /api/profiles/theme
// @desc    Update profile theme settings
// @access  Private
router.put(
  '/theme',
  [
    protect,
    check('theme', 'Theme settings are required').not().isEmpty(),
  ],
  updateTheme
);

// Export the router
module.exports = router;
