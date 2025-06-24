const { Link, User } = require('../models');
const { validationResult } = require('express-validator');

// @desc    Get all links for a user
// @route   GET /api/links
// @access  Private
exports.getLinks = async (req, res) => {
  try {
    const links = await Link.findAll({
      where: { userId: req.user.id },
      order: [['position', 'ASC']],
    });

    res.json({
      success: true,
      count: links.length,
      data: links,
    });
  } catch (error) {
    console.error('Get links error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while getting links',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
};

// @desc    Get public links for a username
// @route   GET /api/links/public/:username
// @access  Public
exports.getPublicLinks = async (req, res) => {
  try {
    const { username } = req.params;
    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }

    const links = await Link.findAll({
      where: { 
        userId: user.id,
        active: true 
      },
      order: [['position', 'ASC']],
    });

    res.json({
      success: true,
      count: links.length,
      data: links,
    });
  } catch (error) {
    console.error('Get public links error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while getting public links',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
};

// @desc    Create a new link
// @route   POST /api/links
// @access  Private
exports.createLink = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { title, url, icon, iconType } = req.body;
    
    // Get highest position to place the new link at the end
    const highestPosition = await Link.max('position', {
      where: { userId: req.user.id }
    }) || 0;
    
    const link = await Link.create({
      userId: req.user.id,
      title,
      url,
      icon: icon || 'faLink',
      iconType: iconType || 'solid',
      position: highestPosition + 1,
    });

    res.status(201).json({
      success: true,
      data: link,
    });
  } catch (error) {
    console.error('Create link error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while creating link',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
};

// @desc    Update a link
// @route   PUT /api/links/:id
// @access  Private
exports.updateLink = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const link = await Link.findOne({
      where: {
        id: req.params.id,
        userId: req.user.id,
      },
    });

    if (!link) {
      return res.status(404).json({
        success: false,
        message: 'Link not found or you do not have permission',
      });
    }

    // Update link fields
    const { title, url, icon, iconType, position, active } = req.body;
    
    // Only update fields that were sent
    if (title !== undefined) link.title = title;
    if (url !== undefined) link.url = url;
    if (icon !== undefined) link.icon = icon;
    if (iconType !== undefined) link.iconType = iconType;
    if (position !== undefined) link.position = position;
    if (active !== undefined) link.active = active;

    await link.save();

    res.json({
      success: true,
      data: link,
    });
  } catch (error) {
    console.error('Update link error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while updating link',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
};

// @desc    Delete a link
// @route   DELETE /api/links/:id
// @access  Private
exports.deleteLink = async (req, res) => {
  try {
    const link = await Link.findOne({
      where: {
        id: req.params.id,
        userId: req.user.id,
      },
    });

    if (!link) {
      return res.status(404).json({
        success: false,
        message: 'Link not found or you do not have permission',
      });
    }

    await link.destroy();

    res.json({
      success: true,
      message: 'Link removed',
    });
  } catch (error) {
    console.error('Delete link error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while deleting link',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
};

// @desc    Track link click
// @route   PUT /api/links/:id/click
// @access  Public
exports.trackLinkClick = async (req, res) => {
  try {
    const link = await Link.findByPk(req.params.id);

    if (!link) {
      return res.status(404).json({
        success: false,
        message: 'Link not found',
      });
    }

    // Update click count and timestamp
    link.clicks += 1;
    link.lastClicked = new Date();
    await link.save();

    res.json({
      success: true,
      message: 'Click tracked',
    });
  } catch (error) {
    console.error('Track link click error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while tracking link click',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
};
