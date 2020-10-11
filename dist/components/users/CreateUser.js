"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const reactstrap_1 = require("reactstrap");
const CreateUser = () => {
    return (<reactstrap_1.Col lg={{ size: 4, offset: 1 }}>
      <reactstrap_1.Card>
        <h2 style={{ textAlign: 'center' }}>Create User</h2>
        <reactstrap_1.FormText color="muted" style={{ textAlign: 'center' }}>
          Note: All special characters will be removed
        </reactstrap_1.FormText>
        <reactstrap_1.CardBody>
          <reactstrap_1.Form>
            <reactstrap_1.Row>
              <reactstrap_1.Col>
                <reactstrap_1.FormGroup>
                  <reactstrap_1.Label for="username">Username</reactstrap_1.Label>
                  <reactstrap_1.Input type="text" id="username"/>
                </reactstrap_1.FormGroup>
              </reactstrap_1.Col>
            </reactstrap_1.Row>
            <reactstrap_1.Row>
              <reactstrap_1.Col>
                <reactstrap_1.FormGroup>
                  <reactstrap_1.Label for="password">Password</reactstrap_1.Label>
                  <reactstrap_1.Input type="password" id="password"/>
                </reactstrap_1.FormGroup>
              </reactstrap_1.Col>
            </reactstrap_1.Row>
            <reactstrap_1.Row>
              <reactstrap_1.Col xs={6}>
                <reactstrap_1.FormGroup>
                  <reactstrap_1.Label for="fname">First Name</reactstrap_1.Label>
                  <reactstrap_1.Input type="text" id="fname"/>
                </reactstrap_1.FormGroup>
              </reactstrap_1.Col>
              <reactstrap_1.Col xs={6}>
                <reactstrap_1.FormGroup>
                  <reactstrap_1.Label for="lname">Last Name</reactstrap_1.Label>
                  <reactstrap_1.Input type="text" id="lname"/>
                </reactstrap_1.FormGroup>
              </reactstrap_1.Col>
            </reactstrap_1.Row>
            <reactstrap_1.Row>
              <reactstrap_1.Col sm={{ size: 6, offset: 3 }}>
                <reactstrap_1.FormGroup>
                  <reactstrap_1.Label for="admin">Administrator</reactstrap_1.Label>
                  <reactstrap_1.Input type="select" id="admin">
                    <option disabled selected hidden>
                      Select
                    </option>
                    <option value="0">False</option>
                    <option value="1">True</option>
                  </reactstrap_1.Input>
                </reactstrap_1.FormGroup>
              </reactstrap_1.Col>
            </reactstrap_1.Row>
            <reactstrap_1.Row>
              <reactstrap_1.Col sm={{ size: 4, offset: 4 }}>
                <reactstrap_1.Button>Create</reactstrap_1.Button>
              </reactstrap_1.Col>
            </reactstrap_1.Row>
          </reactstrap_1.Form>
        </reactstrap_1.CardBody>
      </reactstrap_1.Card>
    </reactstrap_1.Col>);
};
exports.default = CreateUser;
//# sourceMappingURL=CreateUser.js.map