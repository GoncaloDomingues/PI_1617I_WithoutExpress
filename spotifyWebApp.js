"use strict";

const port = process.argv[2] | 3000
const fs = require('fs')
const http = require('http')
const url = require('url')
const spotifyController = require('./controller/spotifyController.js')

const server = http.createServer((req, resp) => {
    const urlInfo = url.parse(req.url, true)
    const parts = urlInfo.pathname.split('/')
    let endPoint="";
    if(parts.length == 3)
        endPoint = parts[parts.length -2]
    else
        endPoint = parts[parts.length-1]

    if(urlInfo.pathname.indexOf('.css') >= 0) {
        resp.writeHead(200, { 'Content-Type': 'text/css' })
        fs.createReadStream('./public/' + urlInfo.pathname).pipe(resp)
        return
    }

    if(spotifyController.hasOwnProperty(endPoint))
    {
        let send  = ""
        if(parts.length == 3)
            send=parts[2]
        else
            send = urlInfo.query;
        spotifyController[endPoint](send, (err, content) => {
            if(err) {
                resp.writeHead(500)
            }
            else{
                resp.writeHead(200, { 'Content-Type': 'text/html' })
                resp.write(content)
            }
            resp.end() // Termina a ligação
        })
    } else {
        spotifyController.home((err, content) => {
            if(err) {
                resp.writeHead(500)
            }
            else{
                resp.writeHead(200, { 'Content-Type': 'text/html' })
                resp.write(content)
            }
            resp.end() // Termina a ligação
        });
    }
})

server.listen(port)
console.log('HTTP Server running on port ' + port)