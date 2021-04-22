const mongoose = require('mongoose');


const MONGO_URI = 'mongodb+srv://n8innate:codesmith@cluster0.pynxp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';


mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'solo_project'

  // sets the name of the DB that our collections are part of
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));


const Schema = mongoose.Schema;


const devSubjectSchema = new Schema({
  name: String,
  dev_type: String,
  instructions: [String],
});


const DevSubject = mongoose.model('devSubject', devSubjectSchema);


module.exports = {
  DevSubject,

};
