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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionsClass = void 0;
class FunctionsClass {
    readMision(filters, perpage, page, model) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                model.find(filters).skip((perpage * page) - perpage).limit(perpage).exec((err, mision) => {
                    if (err) {
                        return reject({
                            error: true,
                            err
                        });
                    }
                    model.find(filters).countDocuments((err, count) => {
                        if (err) {
                            return reject({
                                error: true,
                                err
                            });
                        }
                        return resolve({
                            error: false,
                            data: mision,
                            current: page,
                            count: Math.ceil(count / perpage)
                        });
                    });
                });
            });
        });
    }
}
exports.FunctionsClass = FunctionsClass;
