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
const uuid_1 = require("uuid");
const path_1 = __importDefault(require("path"));
const foro_model_1 = __importDefault(require("../models/foro.model"));
const server_class_1 = require("../class/server.class");
class ForoController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_user = req.body.token.data._id;
            const nameUser = req.body.token.data.name;
            const imgUser = req.body.token.data.img;
            const { description } = req.body;
            let img = '';
            if (req.files) {
                const file = req.files.img;
                const namerShort = file.name.split('.');
                const ext = namerShort[namerShort.length - 1];
                const nameFile = `${uuid_1.v4()}.${ext}`;
                const path = `../../uploads/img/${nameFile}`;
                file.mv(path, (error) => {
                    if (error) {
                        return res.status(500).json({
                            err: true,
                            error
                        });
                    }
                    img = nameFile;
                    const newPost = new foro_model_1.default({ id_user, nameUser, imgUser, description, img });
                    newPost.save().then(() => {
                        const server = server_class_1.ServerExpress.instance;
                        res.json({
                            err: false,
                            message: 'Ok.'
                        });
                        return server.io.emit('post-nuevo', { id_user, nameUser, imgUser, description, img });
                    });
                    return;
                });
                return;
            }
            const newPost = new foro_model_1.default({ id_user, nameUser, imgUser, description });
            newPost.save().then(() => {
                const server = server_class_1.ServerExpress.instance;
                res.json({
                    err: false,
                    message: 'Ok.'
                });
                server.io.emit('post-nuevo', { id_user, nameUser, imgUser, description });
            });
        });
    }
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const posts = yield foro_model_1.default.find();
            res.json({
                err: false,
                data: posts
            });
        });
    }
    readImg(req, res) {
        const file = req.params.name;
        const pathI = path_1.default.join(__dirname, `../../uploads/img/${file}`);
        res.sendFile(pathI);
    }
}
exports.default = new ForoController;
