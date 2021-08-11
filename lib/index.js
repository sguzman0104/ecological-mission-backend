"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_class_1 = require("./class/server.class");
const server = server_class_1.ServerExpress.instance;
server.httpServer.listen(process.env.PORT, () => {
    console.log(`Server running in the port: ${process.env.PORT}`);
});
