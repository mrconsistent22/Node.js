const express = require('express'); 

const app = express();

app.get('/', (req, res) => {
    return res.send('HomePage')
})

app.get('/about', (req, res) => {
    return res.send('Hello from About Page' + " hey " + req.query.name + " your age is " + req.query.age)
})

app.listen(3000, () => console.log("Server is listening on port 3000")) 

// const server = http.createServer(app);

// server.listen(3000, () => console.log("server is listening on port 3000"))