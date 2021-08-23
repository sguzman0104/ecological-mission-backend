import { Document, Model } from "mongoose";

export class FunctionsClass {

    async readMision(filters: {}, perpage: number, page: number, model: Model<Document>) {
        return new Promise((resolve, reject)=>{
            model.find(filters).skip((perpage * page) - perpage).limit(perpage).exec((err, mision)=>{
                if (err) {
                    return reject({
                        error: true,
                        err
                    });
                }
                model.find(filters).countDocuments((err, count)=>{
                    if (err) {
                        return reject({
                            error: true,
                            err
                        });
                    }
                    return resolve({
                        error: false,
                        data: mision,
                        current: page,
                        count: Math.ceil(count / perpage)
                    })
                });
            });
        });
    }


}