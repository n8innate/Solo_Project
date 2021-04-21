const { model } = require('mongoose');
const models = require('../models/mongoose_models');

const appController = {};

appController.getDevSubject = (req, res, next) => {
  // write code here
  models.Subject.find({}, (err, data) => {
    // console.log(data);
    res.locals = data;
    return next();
  })
};






module.exports = appController;
