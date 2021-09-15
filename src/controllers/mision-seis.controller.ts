import { Request, Response } from "express";
import { FunctionsClass } from "../functions/functions";
import misionSeisModel from "../models/mision-seis.model";

class MisionSeisController extends FunctionsClass {
   async create(req: Request, res: Response) {
        const id_user = req.body.token.data._id;
        const nameUser = req.body.token.data.name;
        const imgUser = req.body.token.data.img;

        const { r1, r2, r3, r4, r5 } = req.body;

        const newRes = new misionSeisModel({id_user, nameUser, imgUser, r1, r2, r3, r4, r5});

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

   async read(req: Request, res: Response){
        const params = [];
        params[0] = req.params.page as string;
        params[1] = req.params.perpage as string;

        const page = parseInt(params[0]) || 1;
        const perpage = parseInt(params[1]) || 10;

        super.readMision({}, perpage, page, misionSeisModel).then(data=>{
            res.json(data);
        }).catch(error=>{
            res.status(401).json(error);
        });
    }

}

export default new MisionSeisController