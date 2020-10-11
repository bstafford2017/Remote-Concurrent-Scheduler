"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Spinner = () => {
    return (<div className='text-center col-12' id='spinner'>
      <div className='spinner-border text-success' role='status' style={{ width: '3rem', height: '3rem' }}>
        <span className='sr-only'>loading...</span>
      </div>
    </div>);
};
exports.default = Spinner;
//# sourceMappingURL=Spinner.js.map