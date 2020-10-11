"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const reactstrap_1 = require("reactstrap");
const CreateRoom = () => {
    return (<reactstrap_1.Col lg={{ size: 8, offset: 2 }}>
      <reactstrap_1.Card>
        <h2 style={{ textAlign: 'center' }}>Create Room</h2>
        <reactstrap_1.FormText color="muted" style={{ textAlign: 'center' }}>
          Note: All special characters will be removed
        </reactstrap_1.FormText>
        <reactstrap_1.CardBody>
          <reactstrap_1.Form>
            <reactstrap_1.Row>
              <reactstrap_1.Col xs={2}>
                <reactstrap_1.FormGroup>
                  <reactstrap_1.Label for="building">Building</reactstrap_1.Label>
                  <reactstrap_1.Input type="select" id="building">
                    <option selected={true} disabled={true} hidden={true}>
                      Select
                    </option>
                  </reactstrap_1.Input>
                </reactstrap_1.FormGroup>
              </reactstrap_1.Col>
              <reactstrap_1.Col xs={2}>
                <reactstrap_1.FormGroup>
                  <reactstrap_1.Label for="number">Room #</reactstrap_1.Label>
                  <reactstrap_1.Input type="text" id="number"/>
                </reactstrap_1.FormGroup>
              </reactstrap_1.Col>
              <reactstrap_1.Col xs={2}>
                <reactstrap_1.FormGroup>
                  <reactstrap_1.Label for="seats">Seats</reactstrap_1.Label>
                  <reactstrap_1.Input type="text" id="seats"/>
                </reactstrap_1.FormGroup>
              </reactstrap_1.Col>
              <reactstrap_1.Col xs={2}>
                <reactstrap_1.FormGroup>
                  <reactstrap_1.Label for="projector">Projector</reactstrap_1.Label>
                  <reactstrap_1.Input type="select" id="projector">
                    <option disabled selected hidden>
                      Select
                    </option>
                    <option value="0">False</option>
                    <option value="1">True</option>
                  </reactstrap_1.Input>
                </reactstrap_1.FormGroup>
              </reactstrap_1.Col>
              <reactstrap_1.Col xs={2}>
                <reactstrap_1.Button id="create-room">Create</reactstrap_1.Button>
              </reactstrap_1.Col>
            </reactstrap_1.Row>
          </reactstrap_1.Form>
        </reactstrap_1.CardBody>
      </reactstrap_1.Card>
    </reactstrap_1.Col>);
};
exports.default = CreateRoom;
//# sourceMappingURL=CreateRoom.js.map