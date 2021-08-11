import { Router } from "express";
import misionDosController from "../controllers/mision-dos.controller";
import userMiddleware from "../middlewares/user.middleware";


class MisionDosRoutes {

    public router: Router;

    constructor() {
        this.router = Router();
        this.config();
    }

    config() {
        this.router.post('/api/mision-dos/create', [userMiddleware.validarJWT], misionDosController.create);
    }

}

export default new MisionDosRoutes().router;