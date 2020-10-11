"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const actions_1 = require("../actions");
const initialState = {
    msg: null
};
function default_1(state = initialState, action) {
    switch (action.type) {
        case actions_1.GET_ERRORS:
            return {
                msg: action.payload.msg
            };
        case actions_1.CLEAR_ERRORS:
            return {
                msg: null
            };
        default:
            return Object.assign({}, state);
    }
}
exports.default = default_1;
//# sourceMappingURL=errorReducers.js.map