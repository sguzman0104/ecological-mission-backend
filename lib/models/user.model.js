"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const user = new mongoose_1.Schema({
    id_Socket: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    genero: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    img: {
        type: String
    }
});
user.method('toJSON', function () {
    const object = this.toObject();
    delete object.__v;
    delete object.password;
    return object;
});
exports.default = mongoose_1.model('User', user);
