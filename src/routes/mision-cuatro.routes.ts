import { Router } from "express";
import misionCuatroController from "../controllers/mision-cuatro.controller";
import userMiddleware from "../middlewares/user.middleware";


class MisionCuatroRoutes {

    public router: Router;

    constructor() {
        this.router = Router();
        this.config();
    }

    config() {
        this.router.post('/api/mision-cuatro/create', [userMiddleware.validarJWT], misionCuatroController.create);
    }

}

export default new MisionCuatroRoutes().router;