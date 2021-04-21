const mongoose = require('mongoose');
const app = require('/server.js')

const MONGO_URI = 'mongodb+srv://n8innate:codesmith@cluster0.n9knr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'solo_project'

  // sets the name of the DB that our collections are part of
})
  .then(() => app.listen(3001, () => console.log('Connected to Mongo DB')))
  .catch(err => console.log(err));

const Schema = mongoose.Schema;


const speciesSchema = new Schema({
  dev_type: String,
  // classification: String,
  // average_height: String,
  // average_lifespan: String,
  // hair_colors: String,
  // skin_colors: String,
  // eye_colors: String,
  // language: String,
  // homeworld: String,
  // homeworld_id: {
  //   // type of ObjectId makes this behave like a foreign key referencing the 'planet' collection
  //   type: Schema.Types.ObjectId,
  //   ref: 'planet'
  // }
});


const Species = mongoose.model('species', speciesSchema);


module.exports = {
  Species,
  // Planet,
  // Film,
  // Person
};
