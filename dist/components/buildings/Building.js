"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const reactstrap_1 = require("reactstrap");
const prop_types_1 = __importDefault(require("prop-types"));
const Building = (props) => {
    const { building } = props;
    return (<div className='building'>
      <reactstrap_1.Form>
        <reactstrap_1.FormGroup>
          <reactstrap_1.Col xs={1}>
            <reactstrap_1.Input type='checkbox'/>
          </reactstrap_1.Col>
        </reactstrap_1.FormGroup>
        <reactstrap_1.FormGroup>
          <reactstrap_1.Col xs={10}>
            <reactstrap_1.Input type='text' value={building.name}/>
          </reactstrap_1.Col>
        </reactstrap_1.FormGroup>
      </reactstrap_1.Form>
    </div>);
};
Building.propTypes = {
    building: prop_types_1.default.object.isRequired
};
exports.default = Building;
//# sourceMappingURL=Building.js.map