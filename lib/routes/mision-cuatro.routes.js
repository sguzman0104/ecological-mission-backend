"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mision_cuatro_controller_1 = __importDefault(require("../controllers/mision-cuatro.controller"));
const user_middleware_1 = __importDefault(require("../middlewares/user.middleware"));
class MisionCuatroRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/api/mision-cuatro/create', [user_middleware_1.default.validarJWT], mision_cuatro_controller_1.default.create);
        this.router.get('/api/mision-cuatro/read', [user_middleware_1.default.validarJWT], mision_cuatro_controller_1.default.read);
    }
}
exports.default = new MisionCuatroRoutes().router;
