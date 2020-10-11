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
exports.logout = exports.login = exports.deleteUser = exports.updateUser = exports.createUser = exports.loadUser = void 0;
const axios_1 = __importDefault(require("axios"));
const errorActions_1 = require("./errorActions");
const _1 = require("./");
const tokenConfig = (getState) => {
    const token = getState().user.token;
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    };
    if (token) {
        config.headers['x-auth-token'] = token;
    }
    return config;
};
exports.loadUser = () => (dispatch, getState) => {
    dispatch({ type: _1.USER_LOADING });
    axios_1.default
        .get('/api/user', tokenConfig(getState))
        .then((res) => dispatch({
        type: _1.USER_LOADED,
        payload: res.data.results
    }))
        .catch((err) => {
        if (err.status >= 500) {
            dispatch(errorActions_1.returnErrors(err.response));
            dispatch({
                type: _1.AUTH_ERROR
            });
        }
    });
};
exports.createUser = (user) => (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    axios_1.default
        .post('/api/auth/register', user, config)
        .then((res) => dispatch({
        type: _1.REGISTER_SUCCESS,
        payload: res.data
    }))
        .catch((err) => {
        dispatch(errorActions_1.returnErrors(err.response.data));
        dispatch({
            type: _1.REGISTER_FAIL
        });
    });
};
exports.updateUser = () => { };
exports.deleteUser = () => { };
exports.login = (creds) => (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
    dispatch({ type: _1.USER_LOADING });
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const res = yield axios_1.default.post('/api/user/login', creds, config);
        dispatch({
            type: _1.LOGIN_SUCCESS,
            payload: res.data
        });
    }
    catch (err) {
        dispatch(errorActions_1.returnErrors(err.response.data));
        dispatch({
            type: _1.LOGIN_FAIL
        });
    }
});
exports.logout = () => {
    return {
        type: _1.LOGOUT_SUCCESS
    };
};
//# sourceMappingURL=userActions.js.map