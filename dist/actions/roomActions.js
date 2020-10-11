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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRoom = exports.updateRoom = exports.createRoom = exports.loadRooms = void 0;
const axios_1 = __importDefault(require("axios"));
const errorActions_1 = require("./errorActions");
const _1 = require("./");
exports.loadRooms = (id) => (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(`/api/room/${id}`);
        dispatch({
            action: _1.ROOMS_LOADED,
            payload: response.data
        });
    }
    catch (err) {
        dispatch(errorActions_1.returnErrors(err));
    }
});
exports.createRoom = (room) => (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.post('/api/room/create', room);
        dispatch({
            action: _1.CREATE_ROOM,
            payload: response.data
        });
    }
    catch (err) {
        dispatch(errorActions_1.returnErrors(err));
    }
});
exports.updateRoom = (room) => (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.post('/api/room/update', room);
        dispatch({
            action: _1.UPDATE_ROOM,
            payload: response.data
        });
    }
    catch (err) {
        dispatch(errorActions_1.returnErrors(err));
    }
});
exports.deleteRoom = (id) => (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.post('/api/room/delete', id);
    dispatch({
        action: _1.DELETE_ROOM,
        payload: response.data
    });
});
//# sourceMappingURL=roomActions.js.map