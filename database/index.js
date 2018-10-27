const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/airbnb';

const db = mongoose.connect(mongoUri);

module.exports = db;