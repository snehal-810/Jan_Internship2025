const http = require('http');

http.createServer((req,resp)=> {
    resp.write(`<h1>Hello this is node JS</h1>`);
    resp.write(`<h2>Hello From SunBeam</h2>`);
    resp.write(`<h3>Hello, This is Snehal</h3>`);
    resp.write(`<h4>Hinjewadi</h4>`);
    resp.end();
}).listen(4500);