const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');

const PORT = 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  console.log(`
  ***** FLOW TEST *****\n
  METHOD: ${req.method}\n
  URL: ${req.url}\n`);
  return next();
});



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './index.html'));
});


app.get('/hey', (req, res) => res.send('ho!'))



app.use('*', (req, res, next) => {
  // res.set({ 'Content-Type': 'text/html; charset=utf-8' });
  res.status(404).sendFile(__dirname + '/client/404.html');
});


app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

module.exports = app;