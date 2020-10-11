"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const reactstrap_1 = require("reactstrap");
const CustomAlert_1 = __importDefault(require("../common/CustomAlert"));
const CreateBuilding_1 = __importDefault(require("./CreateBuilding"));
const Building_1 = __importDefault(require("./Building"));
const ManageBuildings = (props) => {
    // const { buildings } = props
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
      <reactstrap_1.Row>
        <CreateBuilding_1.default />
        <reactstrap_1.Col lg={{ size: 6, offset: 1 }}>
          <reactstrap_1.Card>
            <h2 style={{ textAlign: 'center' }}>Manage Buildings</h2>
            <reactstrap_1.FormText color='muted' style={{ textAlign: 'center' }}>
              Note: All special characters will be removed
            </reactstrap_1.FormText>
            <reactstrap_1.CardBody>
              {buildings.map((b) => (<Building_1.default building={b}/>))}
            </reactstrap_1.CardBody>
            <reactstrap_1.CardFooter>
              <reactstrap_1.Col xs={{ size: 4, offset: 1 }} sm={{ size: 2, offset: 3 }}>
                <reactstrap_1.Button>Update</reactstrap_1.Button>
              </reactstrap_1.Col>
              <reactstrap_1.Col xs={{ size: 4, offset: 1 }} sm={{ size: 2, offset: 3 }}>
                <reactstrap_1.Button>Delete</reactstrap_1.Button>
              </reactstrap_1.Col>
            </reactstrap_1.CardFooter>
          </reactstrap_1.Card>
        </reactstrap_1.Col>
      </reactstrap_1.Row>
    </>);
};
exports.default = ManageBuildings;
//# sourceMappingURL=ManageBuildings.js.map