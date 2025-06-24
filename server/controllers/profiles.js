const { Profile, User } = require('../models');
const { validationResult } = require('express-validator');

// @desc    Get current user's profile
// @route   GET /api/profiles/me
// @access  Private
exports.getMyProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({
      where: { userId: req.user.id },
      include: [{ model: User, attributes: ['username', 'email'] }],
    });

    if (!profile) {
      return res.status(404).json({
        success: false,
        message: 'Profile not found',
      });
    }

    res.json({
      success: true,
      data: profile,
    });
  } catch (error) {
    console.error('Get my profile error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while getting profile',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
};

// @desc    Get profile by username
// @route   GET /api/profiles/:username
// @access  Public
exports.getProfileByUsername = async (req, res) => {
  try {
    const { username } = req.params;
    
    const user = await User.findOne({
      where: { username },
      attributes: ['id', 'username'],
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }

    const profile = await Profile.findOne({
      where: { userId: user.id },
      attributes: ['name', 'bio', 'avatar', 'theme', 'socialStats', 'location', 'website'],
    });

    if (!profile) {
      return res.status(404).json({
        success: false,
        message: 'Profile not found',
      });
    }

    res.json({
      success: true,
      data: {
        ...profile.toJSON(),
        username: user.username,
      },
    });
  } catch (error) {
    console.error('Get profile by username error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while getting profile',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
};

// @desc    Update user's profile
// @route   PUT /api/profiles
// @access  Private
exports.updateProfile = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { name, bio, avatar, theme, location, website, socialStats } = req.body;

    const profile = await Profile.findOne({
      where: { userId: req.user.id },
    });

    if (!profile) {
      return res.status(404).json({
        success: false,
        message: 'Profile not found',
      });
    }

    // Update profile fields
    if (name !== undefined) profile.name = name;
    if (bio !== undefined) profile.bio = bio;
    if (avatar !== undefined) profile.avatar = avatar;
    if (theme !== undefined) profile.theme = theme;
    if (location !== undefined) profile.location = location;
    if (website !== undefined) profile.website = website;
    if (socialStats !== undefined) profile.socialStats = socialStats;

    await profile.save();

    res.json({
      success: true,
      data: profile,
    });
  } catch (error) {
    console.error('Update profile error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while updating profile',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
};

// @desc    Update profile theme
// @route   PUT /api/profiles/theme
// @access  Private
exports.updateTheme = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { theme } = req.body;

    const profile = await Profile.findOne({
      where: { userId: req.user.id },
    });

    if (!profile) {
      return res.status(404).json({
        success: false,
        message: 'Profile not found',
      });
    }

    profile.theme = theme;
    await profile.save();

    res.json({
      success: true,
      data: profile,
    });
  } catch (error) {
    console.error('Update theme error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while updating theme',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
};
