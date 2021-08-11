import { Request, Response } from "express";
import userShema from '../models/user.model';
import bcryt from 'bcryptjs';
import jwt from '../configs/helpers/jwt.helper';
import { IUser } from '../configs/interfaces/user.interface';


class UserController{

    async create(req: Request, res: Response){

        const { name, email, passwords, img, genero } = req.body;
        const salt = bcryt.genSaltSync();
        const password = bcryt.hashSync(passwords,salt);
        const newUSer = new userShema({ name, email, password, img, genero });

        await newUSer.save().then((user: any)=>{
            res.status(200).json({
                err: false,
                data: user
            });
        }).catch(error=>{
            res.status(400).json({
                err: true,
                error
            });
        });
    
    }

    async login(req: Request, res: Response){

        const{ email, password } = req.body;
        const userDB = await userShema.findOne({email}) as IUser;

        if(!userDB){
           return res.status(400).json({
                err: true,
                error:{
                    meessage:'Esas credenciales no estan asignadas a ningun usuario'
                }
            });
        }

        const validationPassword = bcryt.compareSync(password, userDB.password || '');

        if(!validationPassword){
            return res.status(400).json({
                err: true,
                error:{
                    meessage:'Esas credenciales no estan asignadas a ningun usuario'
                }
            });
        }

        const token = await jwt.generate(userDB);

        return res.json({
            err: false,
            token
        });

    }

    decryptToken(req: Request, res: Response){

        const { token } = req.body;

        res.json({
            err: false,
            data: token
        });

    }

}

export default new UserController(); 