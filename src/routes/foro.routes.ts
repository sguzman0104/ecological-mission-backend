import { Router } from "express";
import expressFile from 'express-fileupload';
import foroController from "../controllers/foro.controller";
import userMiddleware from "../middlewares/user.middleware";


class ForoRouter {

    public router: Router;

    constructor() {
        this.router = Router();
        this.config();
    }

    config() {
        this.router.use(expressFile());
        this.router.post('/api/foro/create', [userMiddleware.validarJWT], foroController.create);
        this.router.get('/api/foro/read', [userMiddleware.validarJWT], foroController.read);
        this.router.get('/api/foro/img/:name/:token', [userMiddleware.validarJWTURL], foroController.readImg);
    }

}

export default new ForoRouter().router;