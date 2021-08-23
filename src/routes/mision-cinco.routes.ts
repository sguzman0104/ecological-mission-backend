import { Router } from "express";
import misionCincoController from "../controllers/mision-cinco.controller";
import userMiddleware from "../middlewares/user.middleware";


class MisionCincoRoutes {

    public router: Router;

    constructor() {
        this.router = Router();
        this.config();
    }

    config() {
        this.router.post('/api/mision-cinco/create', [userMiddleware.validarJWT], misionCincoController.create);
        this.router.get('/api/mision-cinco/read', [userMiddleware.validarJWT], misionCincoController.read);
    }

}

export default new MisionCincoRoutes().router;