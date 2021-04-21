const express = require('express');

const appController = require('../controllers/appController');

const router = express.Router();


router.get('/devSubject',
  appController.getDevSubject,
  (req, res) => res.status(200).json(res.locals)
);






module.exports = router;