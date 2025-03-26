const http = require('http');

const server = http.createServer();

server.on('request', (request, response) => {
    if(request.method === 'GET' && request.url === '/home')
    {
        response.write("Welcome back, this is the home page");
    }
    else if(request.method === 'GET' && request.url === '/movies'){
        response.write("The list of movies will load soon!");
    }
    else{
        response.write("404 page not found");
    }
    
    response.end();
});

server.listen(8080, () => {
    console.log("This server is running in port 8080.");
});

// http://localhost:8080
// http://127.0.0.1:8080