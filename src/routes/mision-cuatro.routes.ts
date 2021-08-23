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
        this.router.get('/api/mision-cuatro/read', [userMiddleware.validarJWT], misionCuatroController.read);
    }

}

export default new MisionCuatroRoutes().router;