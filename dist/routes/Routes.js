"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_json_1 = __importDefault(require("../config/config.json"));
var controllers_1 = require("../controllers/");
var Routes = /** @class */ (function () {
    function Routes() {
        this.userController = new controllers_1.UserController();
    }
    Routes.prototype.index = function (app) {
        app.route(config_json_1.default.apiUrl + '/users').get(this.userController.getUser);
        //app.route('/api/user/:id').get(this.userController.getUserById);
    };
    return Routes;
}());
exports.Routes = Routes;
