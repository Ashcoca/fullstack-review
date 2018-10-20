const express = require('express');
let app = express();
var bodyParser = require('body-parser')
var helper = require('../helpers/github.js')


app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/repos', function (req, res, callback) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  helper.getReposByUsername(req.body.data, (err, data) => {
    if (err) {
      callback(err)
    } else {
      callback(null, data) //replace callback with save
    }
  });
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

