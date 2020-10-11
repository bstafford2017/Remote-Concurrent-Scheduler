"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const actions_1 = require("../actions");
const initialState = {
    events: [],
    isLoading: false
};
function default_1(state = initialState, action) {
    switch (action.type) {
        case actions_1.EVENTS_LOADING:
            return Object.assign(Object.assign({}, state), { isLoading: true });
        case actions_1.EVENTS_LOADED:
            return Object.assign(Object.assign({}, state), { isLoading: false, events: action.payload });
        case actions_1.CREATE_EVENT:
            return Object.assign(Object.assign({}, state), { events: [...state.events, action.payload] });
        case actions_1.UPDATE_EVENT:
            return Object.assign(Object.assign({}, state), { events: [
                    ...state.events.filter((e) => e !== action.payload),
                    action.payload
                ] });
        case actions_1.DELETE_EVENT:
            return Object.assign(Object.assign({}, state), { events: [...state.events.filter((e) => e !== action.payload)] });
        default:
            return Object.assign({}, state);
    }
}
exports.default = default_1;
//# sourceMappingURL=eventReducer.js.map