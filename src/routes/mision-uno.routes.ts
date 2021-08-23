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
        this.router.get('/api/mision-uno/read', [], misionUnoController.read);
    }

}

export default new MisionUnoRoutes().router;