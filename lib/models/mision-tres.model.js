"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const misionTres = new mongoose_1.Schema({
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
    },
    r3: {
        type: String
    },
    r4: {
        type: String
    },
    r5: {
        type: String
    },
    r6: {
        type: String
    },
    r7: {
        type: String
    },
    r8: {
        type: String
    }
});
exports.default = mongoose_1.model('Misión 3', misionTres);
