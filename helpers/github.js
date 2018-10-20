const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API
console.log("It worked!")
  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL

  let options = {
    method: 'GET',
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  //make an http request to the server with these options
  //request error style
  request(options, (err, data) => {
    if (err, callback) {
      callback(err)
    } else {
      callback(null, data)
    }
  })
}

module.exports.getReposByUsername = getReposByUsername;