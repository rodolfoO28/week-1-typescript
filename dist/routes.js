"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
function HelloGoStack(request, response) {
    var user = CreateUser_1.default({
        email: 'rdf2806@gmail.com',
        password: '123456',
        techs: [
            'NodeJS',
            'ReactJS',
            'React Native'
        ]
    });
    return response.json({ message: 'Hello GoStack', user: user });
}
exports.default = HelloGoStack;
;
