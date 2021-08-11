"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const foro_controller_1 = __importDefault(require("../controllers/foro.controller"));
const user_middleware_1 = __importDefault(require("../middlewares/user.middleware"));
class ForoRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.use(express_fileupload_1.default());
        this.router.post('/api/foro/create', [user_middleware_1.default.validarJWT], foro_controller_1.default.create);
        this.router.get('/api/foro/read', [user_middleware_1.default.validarJWT], foro_controller_1.default.read);
        this.router.get('/api/foro/img/:name/:token', [user_middleware_1.default.validarJWTURL], foro_controller_1.default.readImg);
    }
}
exports.default = new ForoRouter().router;
