"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearErrors = exports.returnErrors = void 0;
const actions_1 = require("../actions");
exports.returnErrors = (msg) => {
    return {
        type: actions_1.GET_ERRORS,
        payload: msg
    };
};
exports.clearErrors = () => {
    return {
        type: actions_1.CLEAR_ERRORS
    };
};
//# sourceMappingURL=errorActions.js.map