"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const actions_1 = require("../actions");
const initialState = {
    buildings: [],
    isLoading: false
};
function default_1(state = initialState, action) {
    switch (action.type) {
        case actions_1.BUILDINGS_LOADING:
            return Object.assign(Object.assign({}, state), { isLoading: true });
        case actions_1.BUILDINGS_LOADED:
            return Object.assign(Object.assign({}, state), { isLoading: false, buildings: action.payload });
        case actions_1.CREATE_BUILDING:
            return Object.assign(Object.assign({}, state), { buildings: [...state.buildings, action.payload] });
        case actions_1.UPDATE_BUILDING:
            return Object.assign(Object.assign({}, state), { buildings: [
                    ...state.buildings.filter((e) => e !== action.payload),
                    action.payload
                ] });
        case actions_1.DELETE_BUILDING:
            return Object.assign(Object.assign({}, state), { buildings: [...state.buildings.filter((e) => e !== action.payload)] });
        default:
            return Object.assign({}, state);
    }
}
exports.default = default_1;
//# sourceMappingURL=buildingReducer.js.map