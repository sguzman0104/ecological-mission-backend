import { Router } from "express";
import misionTresController from "../controllers/mision-tres.controller";
import userMiddleware from "../middlewares/user.middleware";


class MisionTresRoutes {

    public router: Router;

    constructor() {
        this.router = Router();
        this.config();
    }

    config() {
        this.router.post('/api/mision-tres/create', [userMiddleware.validarJWT], misionTresController.create);
    }

}

export default new MisionTresRoutes().router;