"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var UserModel_1 = require("../models/UserModel");
var Users = mongoose_1.default.model('users', UserModel_1.UserSchema);
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.getUser = function (req, res) {
        Users.find({}, function (err, doc) {
            if (err) {
                res.send(err);
            }
            res.json(doc);
        });
    };
    return UserController;
}());
exports.UserController = UserController;
