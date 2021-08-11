"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class JWTHelper {
    static generate(data) {
        return new Promise((resolve, reject) => {
            jsonwebtoken_1.default.sign({ data }, process.env.JWT_SECRET || '', {
                expiresIn: '1h'
            }, (error, token) => {
                if (error) {
                    console.log(error);
                    reject('A token could not be generated.');
                }
                resolve(token);
            });
        });
    }
    static verify(token) {
        return new Promise((resolve, reject) => {
            try {
                const result = jsonwebtoken_1.default.verify(token, process.env.JWT_sECRET || '');
                resolve(result);
            }
            catch (error) {
                reject({
                    err: true,
                    message: 'Invalid token.'
                });
            }
        });
    }
}
exports.default = JWTHelper;
