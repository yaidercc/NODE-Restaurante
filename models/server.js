const express = require("express");
const cors = require("cors")
const {
    dbConnection
} = require("../database/config.db");

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        // rutas
        this.paths = {
            users: "/api/users",
            inventory: "/api/inventory",
            menu: "/api/menu",
            providers: "/api/providers",
            sales: "/api/sales",
            employees: "/api/employees",
        }

        // Conexion a la bd
        this.bdConection();

        // Middlewares
        this.middlewares();

        // Rutas
        this.routes()
    }

    async bdConection() {
        await dbConnection();
    }
    middlewares() {
        // Cors
        this.app.use(cors());
        // Parseo del body
        this.app.use(express.json());
        // Contenido estatico o cliente
        this.app.use(express.static('public'));
    }
    routes() {
        this.app.use(this.paths.employees, require("../routes/employees.routes"))
        // this.app.use(this.paths.inventory, require("../routes/inventory.routes"))
        // this.app.use(this.paths.menu, require("../routes/menu.routes"))
        // this.app.use(this.paths.providers, require("../routes/providers.routes"))
        // this.app.use(this.paths.sales, require("../routes/sales.routes"))
        // this.app.use(this.paths.users, require("../routes/users.routes"))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Escuchando el puerto: ${this.port}`);
        })
    }
}

module.exports = Server;