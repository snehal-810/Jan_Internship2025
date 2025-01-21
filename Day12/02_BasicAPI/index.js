const http = require('http');
const data = require('./data');

// http.createServer((req,resp) => {
//     resp.writeHead(200, {'Content-Type': 'application\json'});
//     resp.write(JSON.stringify({
//         name: 'Snehal Jadhav',
//         email: 'snehal@test.com'
//     }))
//     resp.end();
// }).listen(4500);

http.createServer((req, resp) => {
    resp.writeHead(200, {'Content-Type': 'Application\json'});
    resp.write(JSON.stringify(data));
    resp.end();
}).listen(4500)





// Make a Server
// Create header and API body
// Create an API with static data
// Put data in another file
