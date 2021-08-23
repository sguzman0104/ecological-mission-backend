"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("../models/user.model"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jwt_helper_1 = __importDefault(require("../configs/helpers/jwt.helper"));
class UserController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, passwords, img, genero } = req.body;
            const salt = bcryptjs_1.default.genSaltSync();
            const password = bcryptjs_1.default.hashSync(passwords, salt);
            const newUSer = new user_model_1.default({ name, email, password, img, genero });
            yield newUSer.save().then((user) => {
                res.status(200).json({
                    err: false,
                    data: user
                });
            }).catch(error => {
                res.status(400).json({
                    err: true,
                    error
                });
            });
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            const userDB = yield user_model_1.default.findOne({ email });
            if (!userDB) {
                return res.status(400).json({
                    err: true,
                    error: {
                        meessage: 'Esas credenciales no estan asignadas a ningun usuario'
                    }
                });
            }
            const validationPassword = bcryptjs_1.default.compareSync(password, userDB.password || '');
            if (!validationPassword) {
                return res.status(400).json({
                    err: true,
                    error: {
                        meessage: 'Esas credenciales no estan asignadas a ningun usuario'
                    }
                });
            }
            const token = yield jwt_helper_1.default.generate(userDB);
            return res.json({
                err: false,
                token
            });
        });
    }
    decryptToken(req, res) {
        const { token } = req.body;
        res.json({
            err: false,
            data: token
        });
    }
}
exports.default = new UserController();
