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
    }

}

export default new MisionCincoRoutes().router;