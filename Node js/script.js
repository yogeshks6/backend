// npm init => package.json
// copyfile
// rename
// unlink
const fs = require('fs');

// write file
// fs.writeFile("my.txt", "hey hello", function (err) {
//     if (err) console.log(err);
//     else console.log("done")
// })


// append file
fs.appendFile("my.txt", " main toh acha hu", function (err) {
    if (err) console.log(err);
    else console.log("done")
})
