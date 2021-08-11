"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerExpress = void 0;
const express_1 = __importDefault(require("express"));
const socket_io_1 = require("socket.io");
const compression_1 = __importDefault(require("compression"));
const dotenv_1 = __importDefault(require("dotenv"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const connection_1 = __importDefault(require("../connections/connection"));
const index_routes_1 = __importDefault(require("../routes/index.routes"));
const socket = __importStar(require("../sockets/socket"));
class ServerExpress {
    constructor() {
        dotenv_1.default.config();
        this.app = express_1.default();
        this.app.use(compression_1.default());
        this.httpServer = new http_1.default.Server(this.app);
        this.io = new socket_io_1.Server(this.httpServer, {
            allowEIO3: true,
            cors: {
                origin: true,
                credentials: true,
                optionsSuccessStatus: 200
            }
        });
        this.config();
        this.routes();
        this.listenSockets();
    }
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    config() {
        this.app.use(cors_1.default({
            origin: true,
            credentials: true,
            optionsSuccessStatus: 200
        }));
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({
            extended: true
        }));
        connection_1.default.then(() => {
            console.log('Connection established with database.');
        }).catch(error => {
            console.error(error);
        });
    }
    routes() {
        this.app.use(index_routes_1.default.Routers);
    }
    listenSockets() {
        console.log('Listen Sockets.');
        this.io.on('connection', user => {
            console.log('New user connected.');
            socket.connectCliente(user, this.io);
            socket.configUser(user, this.io);
            socket.getUsers(user, this.io);
            socket.disconnect(user, this.io);
            socket.foro(user, this.io);
        });
    }
}
exports.ServerExpress = ServerExpress;
