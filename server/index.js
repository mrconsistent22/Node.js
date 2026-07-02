const http = require('http');
const fs = require("fs")
const url = require("url")


const server = http.createServer((req, res) => {
    if(req.url === "/favicon.ico") return res.end()
    const log = `${Date.now()}: ${req.method} ${req.url} New Request Received\n`;
    const myUrl = url.parse(req.url, true);
    //console.log(myUrl);
    fs.appendFile("log.txt", log, (err, data) => {
        switch (myUrl.pathname) {
            case "/":
                if(req.method === "GET") {
                    res.end("HomePage");
                }
                break;
            case "/about":
                const username = myUrl.query.myname
                res.end(`hi, ${username}`);
                break;
            case '/search':
                const search = myUrl.query.search_query;
                res.end(`Search results for: ${search}`); 
                break;
            case '/signup':
                if(req.method === "GET") {
                    res.end("This is a signup form")
                }else if(req.method === "POST") {
                    // DB Qyery
                    res.end("Signup Succeded")
                }
                break;
            default:
                res.end("404 Page Not Found");
        }
    });
});


server.listen(3000, () => console.log("server is listening on port 3000"))
