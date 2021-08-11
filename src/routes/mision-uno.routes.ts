import { Router } from "express";
import misionUnoController from "../controllers/mision-uno.controller";
import userMiddleware from "../middlewares/user.middleware";


class MisionUnoRoutes {

    public router: Router;

    constructor() {
        this.router = Router();
        this.config();
    }

    config() {
        this.router.post('/api/mision-uno/create', [userMiddleware.validarJWT], misionUnoController.create);
    }

}

export default new MisionUnoRoutes().router;