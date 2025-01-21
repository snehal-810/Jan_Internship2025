const express = require('express')

const app = express();

app.get('', (req,resp) => {
    console.log("data sent by browser--> ",req.query.name);
    // resp.send('Hello, this is Home Page');
    resp.send("Welcome, "+req.query.name)
});

app.get('/about', (req, resp) => {
    resp.send('Hello, this is about page');
})

app.get('/help', (req, resp) => {
    resp.send('Hello, this is help page');
})

app.listen(4500);