const cors = require('cors');
const path = require('path');
const express = require('express');

const app = express();

const apiRouter = require('./routes/api');

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



app.use('/dist', express.static(path.join(__dirname, '../dist')));

app.use('/api', apiRouter);

app.get('/', function (req, res) {
  res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

// app.get('/hey', (req, res) => res.send('ho!'))






app.use('*', (req, res, next) => {
  // res.set({ 'Content-Type': 'text/html; charset=utf-8' });
  res.status(404).sendFile(__dirname + '/client/404.html');
});


app.listen(process.env.PORT || PORT, () => console.log(`Listening on PORT: ${PORT}`));

module.exports = app;