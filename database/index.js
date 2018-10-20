const mongoose = require('mongoose');
// const MongoClient = require('mongodb').MongoClient;
mongoose.connect('mongodb://localhost/fetcher');
let db = mongoose.connection


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  let repoSchema = mongoose.Schema({
    name: String,
    owner_login: String,
    html_url: String,
    stargazers_url: String

  });
});


// let Repo = mongoose.model('Repo', repoSchema)

let save = (repo) => {

  // let output = [];
  // let parsed = JSON.parse(repo);
  // for (var i = 0; i < parsed.length; i++) {
  //   parsed[i].name
  // }

  repo.save();

}

module.exports.save = save;
// module.exports.Repo = Repo;