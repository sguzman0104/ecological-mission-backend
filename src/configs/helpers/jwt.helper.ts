import { IUser } from '../interfaces/user.interface';
import jwt from 'jsonwebtoken';


export default class JWTHelper {

    public static generate(data: IUser) {
        return new Promise((resolve, reject)=>{
            jwt.sign({data}, process.env.JWT_SECRET || '', {
                expiresIn: '1h'
            }, (error, token)=>{
                if (error) {
                    console.log(error);
                    reject('A token could not be generated.');
                }
                resolve(token);
            });
        });
    }

    public static verify(token: string) {
        return new Promise((resolve, reject)=>{
            try {
                const result = jwt.verify(token, process.env.JWT_sECRET || '');
                resolve(result);
            } catch (error) {
                reject({
                    err: true,
                    message: 'Invalid token.'
                });
            }
        });
    }

}