const http = require('http');

const server = http.createServer(function(req, res){
    const url = req.url;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write('<body>Hello from node route!<form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/users') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write('<body><ul><li>ismaelirc</li><li>ismaelrcosta</li></ul></body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/create-user') {
        const body = [];

        req.on('data', (chunk) => {
            body.push(chunk);
        });

        return req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];
            
            console.log(message);

            return res.end();
        });
    }
});

server.listen(3000);
