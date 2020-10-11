"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const reactstrap_1 = require("reactstrap");
const CreateBuilding = () => {
    return (<reactstrap_1.Col lg={{ size: 4, offset: 1 }}>
      <reactstrap_1.Card>
        <h2 style={{ textAlign: 'center' }}>Create Building</h2>
        <reactstrap_1.FormText color="muted">
          Note: All special characters will be removed
        </reactstrap_1.FormText>
        <reactstrap_1.CardBody>
          <reactstrap_1.Form>
            <reactstrap_1.FormGroup>
              <reactstrap_1.Label for="name">Building Name</reactstrap_1.Label>
              <reactstrap_1.Input type="text" id="name"/>
            </reactstrap_1.FormGroup>
            <reactstrap_1.Col xs={{ size: 4, offset: 4 }}>
              <reactstrap_1.Button>Create</reactstrap_1.Button>
            </reactstrap_1.Col>
          </reactstrap_1.Form>
        </reactstrap_1.CardBody>
      </reactstrap_1.Card>
    </reactstrap_1.Col>);
};
exports.default = CreateBuilding;
//# sourceMappingURL=CreateBuilding.js.map