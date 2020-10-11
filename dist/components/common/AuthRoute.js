"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const prop_types_1 = __importDefault(require("prop-types"));
const routes_1 = require("../routes");
const userActions_1 = require("../../actions/userActions");
const utils_1 = require("../../utils");
const AuthRoute = (_a) => {
    var { loadUser, isLoading, component: Component } = _a, rest = __rest(_a, ["loadUser", "isLoading", "component"]);
    return (<react_router_dom_1.Route {...rest} render={(props) => isLoading ? null : utils_1.hasToken() ? (<Component {...props}/>) : (<react_router_dom_1.Redirect to={routes_1.LOGIN_URL}/>)}/>);
};
AuthRoute.propTypes = {
    path: prop_types_1.default.string.isRequired,
    component: prop_types_1.default.func.isRequired,
    loadUser: prop_types_1.default.func.isRequired,
    isLoading: prop_types_1.default.bool.isRequired
};
const mapStateToProps = (state) => ({
    isLoading: state.user.isLoading
});
const mapDispatchToProps = {
    loadUser: userActions_1.loadUser
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(AuthRoute);
//# sourceMappingURL=AuthRoute.js.map