console.log('I am Working');



const http = require("http");
const user = require('./server');

const onRequest = (request, response) => {
    response.writeHead(200, {"content-type": "text/plain"});
response.write(user.rand);
response.end();
}

http.createServer(onRequest).listen(3000);



