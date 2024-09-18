const express = require('express');
const { database } = require('../database/database');
const { getTicket, getTickets, postTicket, putTicket, deleteTicket } = require('../Controller/ticketController');

class Server {
    constructor() {
        this.app = express()
        this.database()
        this.middlewares();
        this.listen()
        this.routes()
    }

    async database() {
        await database()
    }
    middlewares() {
        this.app.use(express.json());
    }
    listen() {
        this.app.listen(3000, () => {
            console.log(`Server running on localhost`);
        });
    }
    routes() {
        this.app.get('/:id', getTicket)
        this.app.get('/', getTickets)
        this.app.post('/', postTicket)
        this.app.put('/:id', putTicket)
        this.app.delete('/:id', deleteTicket)
    }
}
module.exports = Server;