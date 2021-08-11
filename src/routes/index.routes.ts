import express, { Application, Router } from 'express';
import foroRoutes from './foro.routes';
import misionCincoRoutes from './mision-cinco.routes';
import misionCuatroRoutes from './mision-cuatro.routes';
import misionDosRoutes from './mision-dos.routes';
import misionTresRoutes from './mision-tres.routes';
import misionUnoRoutes from './mision-uno.routes';
import userRoutes from './user.routes';

class IndexRoutes {

    public app: Application;
    private router: Router;

    constructor() {
        this.app = express();
        this.router = Router();
        this.routesGeneral();
    }

    private routesGeneral() {
        const rout = this.router.get('/', (req, res)=>{
            res.send('Server running.');
        });
        this.app.use(rout);
        this.app.use(userRoutes);
        this.app.use(foroRoutes);
        this.app.use(misionUnoRoutes);
        this.app.use(misionDosRoutes);
        this.app.use(misionTresRoutes);
        this.app.use(misionCuatroRoutes);
        this.app.use(misionCincoRoutes);
    }

}

const indexRoutes = new IndexRoutes();

export default {
    Routers: indexRoutes.app
}