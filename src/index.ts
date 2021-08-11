import { ServerExpress } from "./class/server.class";


const server = ServerExpress.instance;

server.httpServer.listen(process.env.PORT, ()=>{
    console.log(`Server running in the port: ${process.env.PORT}`);
});