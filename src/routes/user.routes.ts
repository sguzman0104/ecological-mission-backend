import { Router } from "express";
import  user  from '../controllers/user.controller';
import  middleware  from '../middlewares/user.middleware';


class UserRouter {

    public router: Router = Router();
    constructor(){
        this.config();
    }
    
    config(){
        // Crear usuario
        this.router.post('/api/user/create',[],user.create);
        this.router.post('/api/user/login',[],user.login);
        this.router.post('/api/user/token',[middleware.validarJWT],user.decryptToken);
    }

}

export default new UserRouter().router;