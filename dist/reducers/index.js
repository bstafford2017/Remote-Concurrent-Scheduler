"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const buildingReducer_1 = __importDefault(require("./buildingReducer"));
const roomReducer_1 = __importDefault(require("./roomReducer"));
const userReducer_1 = __importDefault(require("./userReducer"));
const eventReducer_1 = __importDefault(require("./eventReducer"));
const searchReducer_1 = __importDefault(require("./searchReducer"));
exports.default = redux_1.combineReducers({
    building: buildingReducer_1.default,
    room: roomReducer_1.default,
    user: userReducer_1.default,
    event: eventReducer_1.default,
    search: searchReducer_1.default
});
//# sourceMappingURL=index.js.map