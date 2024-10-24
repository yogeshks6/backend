// npm init => package.json
// const fs = require('fs');

// write file
// fs.writeFile("my.txt", "hey hello", function (err) {
//     if (err) console.log(err);
//     else console.log("done")
// })


// append file
// fs.appendFile("my.txt", " main toh acha hu", function (err) {
//     if (err) console.log(err);
//     else console.log("done")
// })


// rename
// fs.rename("my.txt", "hello.txt", function (err) {
//     if (err) console.error(err);
//     else console.log("done")
// })


// copyfile
// fs.copyFile("hello.txt", "./copy/copy.txt", function (err) {
//     if (err) console.error(err);
//     else console.log("complete");
// })


// copyfile error
// fs.copyFile("hello.txt", "./copy2/copy.txt", function (err) {
//     if (err) console.error(err.message);
//     else console.log("complete");
// })


// unlink
// fs.unlink("hello.txt", function (err) {
//     if (err) console.log(err);
//     else console.log("removed");
// })


// rmdir we replace this name "rmdir" into "rm"
// fs.rmdir("./copy", { recursive: true }, function (err) {
//     if (err) console.log(err);
//     else console.log("removed")
// })












// http
const http = require('http');
const server = http.createServer(function (req, res) {
    res.end("hello world")
})
server.listen(3000);