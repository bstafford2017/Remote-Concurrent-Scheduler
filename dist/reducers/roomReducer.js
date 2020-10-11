"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const actions_1 = require("../actions");
const initialState = {
    rooms: [],
    isLoading: false
};
function default_1(state = initialState, action) {
    switch (action.type) {
        case actions_1.ROOMS_LOADING:
            return Object.assign(Object.assign({}, state), { isLoading: true });
        case actions_1.ROOMS_LOADED:
            return Object.assign(Object.assign({}, state), { isLoading: false, rooms: action.payload });
        case actions_1.CREATE_ROOM:
            return Object.assign(Object.assign({}, state), { rooms: [...state.rooms, action.payload] });
        case actions_1.UPDATE_ROOM:
            return Object.assign(Object.assign({}, state), { rooms: [
                    ...state.rooms.filter((e) => e !== action.payload),
                    action.payload
                ] });
        case actions_1.DELETE_ROOM:
            return Object.assign(Object.assign({}, state), { rooms: [...state.rooms.filter((e) => e !== action.payload)] });
        default:
            return Object.assign({}, state);
    }
}
exports.default = default_1;
//# sourceMappingURL=roomReducer.js.map