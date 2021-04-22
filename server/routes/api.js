const express = require('express');

const appController = require('../controllers/appController');

const router = express.Router();


router.get('/devSubject',
  appController.getDevSubject,
  (req, res) => res.status(200).json(res.locals)
);

router.get('/subName',
  appController.getDevName,
  (req, res) => res.status(200).json(res.locals)
);


router.post('/newSubject',
  appController.postDevSubject,
  (req, res) => res.status(200).json({})
);



module.exports = router;