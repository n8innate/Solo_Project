const express = require('express');
const app = express();
const bodyParser = ('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const PORT = 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use((req, res, next) => {
  console.log(`
  ***** FLOW TEST *****\n
  METHOD: ${req.method}\n
  URL: ${req.url}\n`);
  return next();
});


// const MONGO_URI = 'mongodb+srv://n8innate:codesmith@cluster0.n9knr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

// mongoose.connect(MONGO_URI, {
//   // options for the connect method to parse the URI
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   dbName: 'solo_project'

//   // sets the name of the DB that our collections are part of
// })
//   .then(() => app.listen(3001, () => console.log('Connected to Mongo DB')))
//   .catch(err => console.log(err));



app.get('/', function (req, res) {
  res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});


app.use('/dist', express.static(path.join(__dirname, '../dist')));


app.get('/hey', (req, res) => res.send('ho!'))



app.use('*', (req, res, next) => {
  // res.set({ 'Content-Type': 'text/html; charset=utf-8' });
  res.status(404).sendFile(__dirname + '/client/404.html');
});


app.listen(process.env.PORT || PORT, () => console.log(`Listening on PORT: ${PORT}`));

module.exports = app;