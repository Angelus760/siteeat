const http = require('http')
    static = require('node-static'),
    file = new static.Server('.')
 
const PORT = '8080'
const HOST = '127.0.0.1'

http.createServer(function(request, response) {
    request.addListener('end', function() {
        file.serve(request, response);
    }).resume();
}).listen(PORT, HOST, function() { 
    console.log(`Server running at http://'${HOST}:${PORT}`);
});