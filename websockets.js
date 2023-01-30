const express = require("express");
const app = express();

// --- connect the websockets to the server --- //
const server = require('http').createServer(app);
const WebSocket = require('ws');

const wss = new WebSocket.Server({server: server});

// runs whenever a connection is made to the web socket server
wss.on("connection", function(ws) {
    console.log("A new client connected!");
    
     // runs whenever the server receives a message from any client
    ws.on("message", message => {
        console.log("received message from client");

        // broadcasts the message back to each client
        wss.clients.forEach(client => {
            if (client.readyState == WebSocket.OPEN) {
                console.log("sending message to client: " + message);
                client.send(message.toString());
            }
        });

    });

});

module.exports = app;