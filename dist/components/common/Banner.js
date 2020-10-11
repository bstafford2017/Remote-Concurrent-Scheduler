"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Banner = (props) => {
    const { absolute } = props;
    return (<react_router_dom_1.Link to="home">
      <img className="logo img-fluid" src="images/new_logo.png" alt="University of North Dakota" style={{ position: absolute ? 'absolute' : undefined }}/>
    </react_router_dom_1.Link>);
};
exports.default = Banner;
//# sourceMappingURL=Banner.js.map