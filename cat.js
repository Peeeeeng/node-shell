const fs = require('fs');
const done = require('./done.js')

function cat(file) {
    fs.readFile(`./${file}`, 'utf8', (err, data) => {
        if (err) throw err;
        done(data);
    });
}

module.exports = cat;