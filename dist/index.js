"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_json_1 = require("./config/config.json");
var app_1 = __importDefault(require("./app"));
app_1.default.listen(config_json_1.serverPort, function () {
    console.log("Listening at http://localhost:" + config_json_1.serverPort + "/");
});
