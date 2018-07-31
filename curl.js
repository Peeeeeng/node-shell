let request = require("request")
let done = require('./done.js')

function curl(url) {
    request(url, function(error, response, body) {
        done('error:', error); // Print the error if one occurred
        done('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        done('body:', body); // Print the HTML for the Google homepage.
    })
}

module.exports = curl