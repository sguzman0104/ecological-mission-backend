import { Request, Response } from "express";
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import foroModel from "../models/foro.model";
import { ServerExpress } from '../class/server.class';


class ForoController {

    async create(req: Request, res: Response) {
        
        const id_user = req.body.token.data._id;
        const nameUser = req.body.token.data.name;
        const imgUser = req.body.token.data.img;

        const { description } = req.body;

        let img = '';

        if (req.files) {

            const file = req.files.img as any;

            const namerShort = file.name.split('.');
            const ext = namerShort[namerShort.length - 1];
            const nameFile = `${uuidv4()}.${ext}`;
            const path = `../../uploads/img/${nameFile}`;

            file.mv(path, (error: any)=>{
                if (error) {
                    return res.status(500).json({
                        err: true, 
                        error
                    });
                }

                img = nameFile;

                const newPost = new foroModel({id_user, nameUser, imgUser, description, img});

                newPost.save().then(()=>{
                    const server = ServerExpress.instance;
                    res.json({
                        err: false,
                        message: 'Ok.'
                    });
                    return server.io.emit('post-nuevo', {id_user, nameUser, imgUser, description, img});
                });
                return
            });
            return
        }
        
        const newPost = new foroModel({id_user, nameUser, imgUser, description});

        newPost.save().then(()=>{
            const server = ServerExpress.instance;
            res.json({
                err: false,
                message: 'Ok.'
            });
            server.io.emit('post-nuevo', {id_user, nameUser, imgUser, description});
        });

    }

    async read(req: Request, res: Response) {

        const posts = await foroModel.find();
        res.json({
            err: false,
            data: posts
        });

    }

    readImg(req: Request, res: Response) {
        const file = req.params.name;
        const pathI = path.join(__dirname, `../../uploads/img/${file}`);
        res.sendFile(pathI);
    }

}

export default new ForoController