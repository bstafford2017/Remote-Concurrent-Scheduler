"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const actions_1 = require("../actions");
const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    isLoading: false,
    user: null
};
function default_1(state = initialState, action) {
    switch (action.type) {
        case actions_1.USER_LOADING:
            return Object.assign(Object.assign({}, state), { isLoading: true });
        case actions_1.USER_LOADED:
            return Object.assign(Object.assign({}, state), { isAuthenticated: true, isLoading: false, user: {
                    id: action.payload.id,
                    username: action.payload.username,
                    password: action.payload.password,
                    fname: action.payload.fname,
                    lname: action.payload.lname,
                    admin: action.payload.admin ? true : false
                } });
        case actions_1.LOGIN_SUCCESS:
        case actions_1.REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return Object.assign(Object.assign(Object.assign({}, state), action.payload), { isAuthenticated: true, isLoading: false });
        case actions_1.AUTH_ERROR:
        case actions_1.LOGIN_FAIL:
        case actions_1.LOGOUT_SUCCESS:
        case actions_1.REGISTER_FAIL:
            localStorage.removeItem('token');
            return Object.assign(Object.assign({}, state), { token: null, user: null, isAuthenticated: false, isLoading: false });
        default:
            return Object.assign({}, state);
    }
}
exports.default = default_1;
//# sourceMappingURL=userReducer.js.map