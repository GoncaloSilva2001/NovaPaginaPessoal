const http = require('http');
const express = require('express');
const path = require ('path');

const app = express();
app.use(express.json());
app.use(express.static('express'));

//URL PADRÃO DO WEBSITE
app.use('/', (req,res)=>{
    res.sendFile(path.join(__dirname+'express\indexedDB.html'));
})

const server=http.createServer(app);
const port=4000;
server.listen(port);

console.debug('SERVIDOR INICIALIZADO');