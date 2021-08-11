import express, { Application } from 'express';
import SocketIO, { Server }  from 'socket.io';
import compression from 'compression';
import dotenv from 'dotenv';
import http from 'http';
import cors from 'cors';

import db from '../connections/connection'
import routers from '../routes/index.routes';
import * as socket from '../sockets/socket';

export class ServerExpress {

    private app: Application;
    public io: SocketIO.Server;
    public httpServer: http.Server;

    private static _instance: ServerExpress;

    public static get instance() {
        return this._instance || (this._instance = new this());
    }

    private constructor() {
        dotenv.config();
        this.app = express();
        this.app.use(compression());
        this.httpServer = new http.Server( this.app );
        this.io = new Server(this.httpServer, { 
            allowEIO3: true, 
            cors:{ 
                origin: true, 
                credentials: true,
                optionsSuccessStatus: 200 
                } 
            });
        this.config();
        this.routes();
        this.listenSockets();
    }

    private config():void {
        this.app.use(cors({
            origin: true, 
            credentials: true, 
            optionsSuccessStatus: 200
        }));
        this.app.use(express.json());
        this.app.use(express.urlencoded({
            extended: true
        }));
        db.then(()=>{
            console.log('Connection established with database.');
        }).catch(error=>{
            console.error(error)
        });
    }

    private routes():void {
        this.app.use(routers.Routers);
    }

    private listenSockets():void {
        console.log('Listen Sockets.');
            
        this.io.on('connection',user=>{
            console.log('New user connected.');
            socket.connectCliente( user, this.io );
            socket.configUser( user, this.io );
            socket.getUsers( user, this.io );
            socket.disconnect( user, this.io );   
            socket.foro(user, this.io); 
        });
    }
    
}