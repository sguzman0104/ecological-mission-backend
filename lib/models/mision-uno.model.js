"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const misionUno = new mongoose_1.Schema({
    id_user: {
        type: String,
        required: true
    },
    imgUser: {
        type: String,
        required: true
    },
    nameUser: {
        type: String,
        required: true
    },
    r1: {
        type: String
    },
    r2: {
        type: String
    }
});
exports.default = mongoose_1.model('Misión 1', misionUno);
