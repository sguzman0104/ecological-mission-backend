import { Router } from "express";
import misionSeisController from "../controllers/mision-seis.controller";
import userMiddleware from "../middlewares/user.middleware";


class MisionSeisRoutes {

    public router: Router;

    constructor() {
        this.router = Router();
        this.config();
    }

    config() {
        this.router.post('/api/mision-seis/create', [userMiddleware.validarJWT], misionSeisController.create);
        this.router.get('/api/mision-seis/read', [userMiddleware.validarJWT], misionSeisController.read);
    }

}

export default new MisionSeisRoutes().router;