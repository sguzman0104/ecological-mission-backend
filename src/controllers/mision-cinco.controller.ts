import { Request, Response } from "express";
import misionCincoModel from "../models/mision-cinco.model";

class MisionCincoController {
   async create(req: Request, res: Response) {
        const id_user = req.body.token.data._id;
        const nameUser = req.body.token.data.name;
        const imgUser = req.body.token.data.img;

        const { r1, r2, r3, r4, r5 } = req.body;

        const newRes = new misionCincoModel({id_user, nameUser, imgUser, r1, r2, r3, r4, r5});

        newRes.save().then(data=>{
            res.status(200).json({
                err: false,
                data
            });
        }).catch(err=>{
            res.status(500).json({
                error: true,
                err
            });
        })
   }
}

export default new MisionCincoController