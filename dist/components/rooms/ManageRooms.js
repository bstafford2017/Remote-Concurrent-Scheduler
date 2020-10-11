"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const reactstrap_1 = require("reactstrap");
const CustomAlert_1 = __importDefault(require("../common/CustomAlert"));
const CreateRoom_1 = __importDefault(require("../rooms/CreateRoom"));
const Room_1 = __importDefault(require("../rooms/Room"));
const ManageRooms = (props) => {
    // const { rooms, buildings } = props
    const rooms = [
        {
            number: '21',
            seats: 2,
            projector: true,
            building: 'sas'
        },
        {
            number: '22',
            seats: 2,
            projector: true,
            building: 'as'
        }
    ];
    const buildings = [
        {
            name: 'test'
        },
        {
            name: 'test'
        }
    ];
    return (<>
      <CustomAlert_1.default display={false} text={''}/>
      <CreateRoom_1.default />
      <reactstrap_1.Col lg={{ size: 8, offset: 2 }}>
        <reactstrap_1.Card>
          <h2 style={{ textAlign: 'center' }}>Manage Rooms</h2>
          <reactstrap_1.FormText color='muted' style={{ textAlign: 'center' }}>
            Note: All special characters will be removed
          </reactstrap_1.FormText>
          <reactstrap_1.CardBody>
            <reactstrap_1.Form>
              <reactstrap_1.Col xs={{ size: 5, offset: 4 }}>
                <reactstrap_1.FormGroup>
                  <reactstrap_1.Label for='building'>Building</reactstrap_1.Label>
                  <reactstrap_1.Input type='select' id='building'>
                    {buildings.map((b) => (<option>{b.name}</option>))}
                  </reactstrap_1.Input>
                </reactstrap_1.FormGroup>
              </reactstrap_1.Col>
            </reactstrap_1.Form>
            <reactstrap_1.Table responsive={true}>
              <thead>
                <tr>
                  <th scope='col'>Room #</th>
                  <th scope='col'>Seats</th>
                  <th scope='col'>Projector</th>
                  <th scope='col'></th>
                  <th scope='col'></th>
                </tr>
              </thead>
              <tbody>
                {rooms.map((r) => (<Room_1.default room={r}/>))}
              </tbody>
            </reactstrap_1.Table>
          </reactstrap_1.CardBody>
        </reactstrap_1.Card>
      </reactstrap_1.Col>
    </>);
};
exports.default = ManageRooms;
//# sourceMappingURL=ManageRooms.js.map