'use strict'

const http = require('http');
const debug = require('debug')('nodestr:serrver');
const  app = require('../src/app')

const  port = normalizePort(process.env.PORT ||'3000');
app.set('port' , port);

const server = http.createServer(app);


server.listen(port);
// server.on('error',onError);
console.log('API rodando na porta ' + port);

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}