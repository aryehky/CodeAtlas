const express = require('express');
const router = express.Router();
const notes = require('../models/Note');

router.get('/', (req, res) => {
  res.json(notes);
});

module.exports = router;
