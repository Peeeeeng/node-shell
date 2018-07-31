let pwd = require("./pwd.js");
let ls = require('./ls.js');
let cat = require('./cat.js');
let curl = require('./curl.js');
let done = require("./done.js")


process.stdout.write('prompt >');

process.stdin.on('data', (data) => {
    const cmds = data.toString().trim().split(' ');

    if (cmds[0] === "pwd") {
        done(pwd());
    }
    if (cmds[0] === 'ls') {
        console.log(typeof(ls()))
    }
    if (cmds[0] === 'cat') {
        cat(cmds[1]);
    }
    if (cmds[0] === 'curl') {
        curl(cmds[1]);
    }
})