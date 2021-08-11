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
const mision_cuatro_model_1 = __importDefault(require("../models/mision-cuatro.model"));
class MisionCuatroController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_user = req.body.token.data._id;
            const nameUser = req.body.token.data.name;
            const imgUser = req.body.token.data.img;
            const { r1, r2, r3, r4 } = req.body;
            const newRes = new mision_cuatro_model_1.default({ id_user, nameUser, imgUser, r1, r2, r3, r4 });
            newRes.save().then(data => {
                res.status(200).json({
                    err: false,
                    data
                });
            }).catch(err => {
                res.status(500).json({
                    error: true,
                    err
                });
            });
        });
    }
}
exports.default = new MisionCuatroController;
