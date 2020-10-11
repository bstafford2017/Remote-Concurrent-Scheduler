"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const reactstrap_1 = require("reactstrap");
const Filter = (props) => {
    return (<div id='filter' className='form-row pb-3' style={{ margin: 0 }}>
      <reactstrap_1.Col xs={{ size: 3, offset: 3 }}>
        <reactstrap_1.FormGroup>
          <reactstrap_1.Label for='filter-building'>Building</reactstrap_1.Label>
          <reactstrap_1.Input type='select' id='filter-building' defaultValue='default' style={{ color: 'white' }}>
            <option value='default' disabled={true} hidden={true}>
              All Buildings
            </option>
          </reactstrap_1.Input>
        </reactstrap_1.FormGroup>
      </reactstrap_1.Col>
      <reactstrap_1.Col xs={{ size: 3, offset: 1 }}>
        <reactstrap_1.FormGroup>
          <reactstrap_1.Label for='filter-room'>Room</reactstrap_1.Label>
          <reactstrap_1.Input type='select' id='filter-room' defaultValue='default' style={{ color: 'white' }}>
            <option value='default' disabled={true} hidden={true}>
              All Rooms
            </option>
          </reactstrap_1.Input>
        </reactstrap_1.FormGroup>
      </reactstrap_1.Col>
    </div>);
};
exports.default = Filter;
//# sourceMappingURL=Filter.js.map