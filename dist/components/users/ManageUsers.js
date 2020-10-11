"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const reactstrap_1 = require("reactstrap");
const CustomAlert_1 = __importDefault(require("../common/CustomAlert"));
const CreateUser_1 = __importDefault(require("./CreateUser"));
const User_1 = __importDefault(require("./User"));
const ManageUsers = (props) => {
    // const { users } = props
    const users = [
        {
            username: 'test',
            password: 'test',
            fname: 'test',
            lname: 'test',
            admin: false
        },
        {
            username: 'test',
            password: 'test',
            fname: 'test',
            lname: 'test',
            admin: false
        }
    ];
    return (<>
      <CustomAlert_1.default display={false} text={''}/>
      <reactstrap_1.Row>
        <CreateUser_1.default />
        <reactstrap_1.Col lg={{ size: 6, offset: 1 }}>
          <reactstrap_1.Card>
            <h2 style={{ textAlign: 'center' }}>Manage Users</h2>
            <reactstrap_1.FormText color='muted' style={{ textAlign: 'center' }}>
              Note: All special characters will be removed
            </reactstrap_1.FormText>
            <reactstrap_1.CardBody>
              <reactstrap_1.Table responsive>
                <thead>
                  <tr>
                    <th scope='col'>Username</th>
                    <th scope='col'>Password</th>
                    <th scope='col'>First Name</th>
                    <th scope='col'>Last Name</th>
                    <th scope='col'>Admin</th>
                    <th scope='col'></th>
                    <th scope='col'></th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((u) => (<User_1.default user={u}/>))}
                </tbody>
              </reactstrap_1.Table>
            </reactstrap_1.CardBody>
          </reactstrap_1.Card>
        </reactstrap_1.Col>
      </reactstrap_1.Row>
    </>);
};
exports.default = ManageUsers;
//# sourceMappingURL=ManageUsers.js.map