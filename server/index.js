var path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Listing = require('../database/Listing.js');

let app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.get('/listings', (req, res) => {
  console.log(req, 'we are getting something. yes!')
  Listing.find(function(err, listing){
    if (err) {
      console.log(error, 'something broke');
    } else {
      console.log(listing, 'this is the listing');
      res.send(listing)
    }
  })
})

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
