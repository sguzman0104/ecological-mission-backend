"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const user_middleware_1 = __importDefault(require("../middlewares/user.middleware"));
class UserRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        // Crear usuario
        this.router.post('/api/user/create', [], user_controller_1.default.create);
        this.router.post('/api/user/login', [], user_controller_1.default.login);
        this.router.post('/api/user/token', [user_middleware_1.default.validarJWT], user_controller_1.default.decryptToken);
    }
}
exports.default = new UserRouter().router;
