"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const foro_routes_1 = __importDefault(require("./foro.routes"));
const mision_cinco_routes_1 = __importDefault(require("./mision-cinco.routes"));
const mision_cuatro_routes_1 = __importDefault(require("./mision-cuatro.routes"));
const mision_dos_routes_1 = __importDefault(require("./mision-dos.routes"));
const mision_seis_routes_1 = __importDefault(require("./mision-seis.routes"));
const mision_tres_routes_1 = __importDefault(require("./mision-tres.routes"));
const mision_uno_routes_1 = __importDefault(require("./mision-uno.routes"));
const user_routes_1 = __importDefault(require("./user.routes"));
class IndexRoutes {
    constructor() {
        this.app = express_1.default();
        this.router = express_1.Router();
        this.routesGeneral();
    }
    routesGeneral() {
        const rout = this.router.get('/', (req, res) => {
            res.send('Server running.');
        });
        this.app.use(rout);
        this.app.use(user_routes_1.default);
        this.app.use(foro_routes_1.default);
        this.app.use(mision_uno_routes_1.default);
        this.app.use(mision_dos_routes_1.default);
        this.app.use(mision_tres_routes_1.default);
        this.app.use(mision_cuatro_routes_1.default);
        this.app.use(mision_cinco_routes_1.default);
        this.app.use(mision_seis_routes_1.default);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = {
    Routers: indexRoutes.app
};
