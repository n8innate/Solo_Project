// const { model } = require('mongoose');
const models = require('../models/mongoose_models');


const appController = {};


appController.getDevSubject = (req, res, next) => {
  // write code here
  models.DevSubject.find({}, (err, data) => {
    console.log(data);
    res.locals = data;
    return next();
  })
};


appController.getDevName = (req, res, next) => {
  // write code here
  models.DevSubject.find({}, (err, data) => {
    console.log(data);
    res.locals = data;
    return next();
  })
};


appController.postDevSubject = (req, res, next) => {
  const newSub = {
    name: req.body.name,
    dev_type: req.body.dev_type,
    instructions: req.body.instructions,
  }
  models.DevSubject.create(newSub, (err, data) => {
    console.log(data);
    res.locals = data;
    return next();
  })
};


appController.postNextInstruction = (req, res, next) => {
  models.DevSubject.findOneAndUpdate(
    {
      _id: req.body._id
    }, 
    {
      $addToSet: { instructions: req.body.instructions }
    }, 
    (err, data) => {
    console.log(data);
    res.locals = data;
    return next();
  })
};



module.exports = appController;
