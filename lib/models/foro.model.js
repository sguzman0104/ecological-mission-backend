"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const foro = new mongoose_1.Schema({
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
    description: {
        type: String
    },
    img: {
        type: String
    }
});
exports.default = mongoose_1.model('Foro', foro);
