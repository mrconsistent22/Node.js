const http = require('http');
const fs = require("fs")


const server = http.createServer((req, res) => {
    fs.appendFile()
    res.end("hello from server")
});


server.listen(3000, () => console.log("server is listening on port 3000"))
