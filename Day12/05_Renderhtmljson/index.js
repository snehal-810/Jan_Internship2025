const express = require('express')

const app = express();

app.get('', (req, resp) => {
    resp.send(`<h1>Welcome to Home Page`);
})

app.get('/about', (req, resp) => {
    resp.send(`
            <input type="text" placeholder="User Name" />
            <button>Click Me</button>
        `);
})

app.get('/help', (req,resp) => {
    resp.send([
        {
            name: 'snehal jadhav',
            email: 'snehal@gmail.com'
        },
        {
            name: 'mandar',
            email: 'mandar@gmail.com'
        }
    ])
})

app.listen(4500)