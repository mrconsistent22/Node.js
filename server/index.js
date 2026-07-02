const http = require('http');
const fs = require("fs")
const url = require("url")


const server = http.createServer((req, res) => {
    if(req.url === "/favicon.ico") return res.end()
    const log = `${Date.now()}: ${req.url} New Request Received\n`;
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);
    fs.appendFile("log.txt", log, (err, data) => {
        switch (myUrl.pathname) {
            case "/":
                res.end("HomePage");
                break;
            case "/about":
                const username = myUrl.query.myname
                res.end(`hi, ${username}`);
                break;
            case '/search':
                const search = myUrl.query.search_query;
                res.end(`Search results for: ${search}`);
            default:
                res.end("404 Page Not Found");
        }
    });
});


server.listen(3000, () => console.log("server is listening on port 3000"))
