const express = require('express');
const router = express.Router();
const Match = require('../models/match');

router.get('/matches', async (req, res) => {
  try {
    const matches = await Match.find();
    res.json(matches);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch matches' });
  }
});

module.exports = router;
