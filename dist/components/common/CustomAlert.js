"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const reactstrap_1 = require("reactstrap");
const CustomerAlert = (props) => {
    const { display, text } = props;
    const onDismiss = () => !display;
    return (<reactstrap_1.Alert color='danger' isOpen={display} toggle={onDismiss}>
      {text}
    </reactstrap_1.Alert>);
};
exports.default = CustomerAlert;
//# sourceMappingURL=CustomAlert.js.map