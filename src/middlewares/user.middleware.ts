import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';


class UserMiddleware{

    async validarJWT(req: Request, res: Response, next: NextFunction){
        const { token } = req.headers;
        
        if(!token){
            return res.status(401).json({
                err:true,
                message:'Not found token.'
            });
        }

        const tokenV = String(token);

        try {
            req.body.token = jwt.verify(tokenV, process.env.JWT_SECRET || "");
            next();
        }catch (erorr) {
            return res.status(401).json({
                err:true,
                message:'Invalid token.'
            });
        }

        return
    }

    async validarJWTURL(req: Request, res: Response, next: NextFunction){
        const { token } = req.params;
        
        if(!token){
            return res.status(401).json({
                err:true,
                message:'Not found token.'
            });
        }

        const tokenV = String(token);

        try {
            req.body.token = jwt.verify(tokenV, process.env.JWT_SECRET || "");
            next();
        }catch (erorr) {
            return res.status(401).json({
                err:true,
                message:'Invalid token.'
            });
        }
       
        return
    }

}

export default new UserMiddleware(); 