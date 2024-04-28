const express = require("express");
const mongoose = require("mongoose");

// init app
const PORT = process.env.PORT || 4000;
const app = express();



const DB_USER= 'root';
const DB_PSSWORD= 'example';
const DB_PORT= 27017;
const DB_HOST= 'mongo';

const URI=('mongodb://${DB_USER}:${DB_PSSWORD}@${DB_HOST}:${DB_PORT}');
mongoose.connect(URI).then(() => console.log('conect to db ..')).then((err) => console.log('failed db ..: ',err));

app.get('/', (req, res) => res.send('<h1> HELLO AHMED! hi hi </h1>'));

app.listen(PORT, () => console.log('app is up and running on port: ${PORT} '));