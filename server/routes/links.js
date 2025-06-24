const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const { getLinks, getPublicLinks, createLink, updateLink, deleteLink, trackLinkClick } = require('../controllers/links');
const { protect } = require('../middleware/auth');

// @route   GET /api/links
// @desc    Get all links for logged in user
// @access  Private
router.get('/', protect, getLinks);

// @route   GET /api/links/public/:username
// @desc    Get all active links for a public profile by username
// @access  Public
router.get('/public/:username', getPublicLinks);

// @route   POST /api/links
// @desc    Create a new link
// @access  Private
router.post(
  '/',
  [
    protect,
    check('title', 'Title is required').not().isEmpty(),
    check('url', 'Valid URL is required').isURL(),
  ],
  createLink
);

// @route   PUT /api/links/:id
// @desc    Update a link
// @access  Private
router.put('/:id', protect, updateLink);

// @route   DELETE /api/links/:id
// @desc    Delete a link
// @access  Private
router.delete('/:id', protect, deleteLink);

// @route   PUT /api/links/:id/click
// @desc    Track a click on a link
// @access  Public
router.put('/:id/click', trackLinkClick);

// Export the router
module.exports = router;
