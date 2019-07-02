"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var path_1 = __importDefault(require("path"));
var mongoose_1 = __importDefault(require("mongoose"));
var config_json_1 = __importDefault(require("./config/config.json"));
var Routes_1 = require("./routes/Routes");
var App = /** @class */ (function () {
    function App() {
        this.route = new Routes_1.Routes();
        this.mongoUrl = "mongodb://" + config_json_1.default.db.host + ":" + config_json_1.default.db.port + "/" + config_json_1.default.db.name;
        this.app = express_1.default();
        this.config();
        this.mongoSetup();
        this.route.index(this.app);
        this.app.use('*', function (req, res) {
            res.sendFile(path_1.default.join(__dirname, config_json_1.default.pathToClient + 'index.html'));
        });
    }
    App.prototype.config = function () {
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        this.app.use(express_1.default.static(path_1.default.join(__dirname, config_json_1.default.pathToClient)));
    };
    App.prototype.mongoSetup = function () {
        mongoose_1.default.Promise = global.Promise;
        mongoose_1.default.connect(this.mongoUrl, { useNewUrlParser: true });
    };
    return App;
}());
exports.default = new App().app;
