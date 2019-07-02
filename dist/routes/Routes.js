"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var controllers_1 = require("../controllers/");
var Routes = /** @class */ (function () {
    function Routes() {
        this.userController = new controllers_1.UserController();
    }
    Routes.prototype.index = function (app) {
        app.route('/api/users').get(this.userController.getUser);
        //app.route('/api/user/:id').get(this.userController.getUserById);
    };
    return Routes;
}());
exports.Routes = Routes;
