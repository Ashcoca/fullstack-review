const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
mongoose.connect('mongodb://localhost/fetcher');
let db = database.connection


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  let repoSchema = mongoose.Schema({
    name: String,
    owner_login: String,
    html_url: String,
    stargazers_url: String

  });
});


let Repo = mongoose.model('Repo', repoSchema);

let save = (repo) => {


  repo.save();

}

module.exports.save = save;
module.exports.Repo = Repo;