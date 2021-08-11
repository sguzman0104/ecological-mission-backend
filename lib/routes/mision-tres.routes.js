"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mision_tres_controller_1 = __importDefault(require("../controllers/mision-tres.controller"));
const user_middleware_1 = __importDefault(require("../middlewares/user.middleware"));
class MisionTresRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/api/mision-tres/create', [user_middleware_1.default.validarJWT], mision_tres_controller_1.default.create);
    }
}
exports.default = new MisionTresRoutes().router;
