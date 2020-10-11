"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const actions_1 = require("../actions");
const initialState = [];
function default_1(state = initialState, action) {
    switch (action.type) {
        case actions_1.SEARCH_EVENT:
            return [...state, action.payload];
        default:
            return [...state];
    }
}
exports.default = default_1;
//# sourceMappingURL=searchReducer.js.map