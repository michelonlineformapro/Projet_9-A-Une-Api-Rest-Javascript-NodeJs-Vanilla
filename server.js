//Appel module http
const http = require('http');
//Hote
const hostname = '127.0.0.1';
//Le port
const port = 3000;
//Le données json
const produits = require('./produits.json');

//Creer le serveur
const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Content-type', 'application/json');
    response.end(JSON.stringify(produits));
});

//Le port d'ecoute du serveur
server.listen(port, hostname, () => {
    console.log(`Le serveur tourne sur http://${hostname}:${port}/`)
});