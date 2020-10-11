"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const reactstrap_1 = require("reactstrap");
const Settings = () => {
    const [user, setUser] = react_1.useState({
        username: '',
        password: '',
        confirmPassword: '',
        fname: '',
        lname: '',
        admin: false
    });
    const onChange = (e) => {
        setUser(Object.assign(Object.assign({}, user), { [e.target.id]: e.target.value }));
    };
    const submit = () => { };
    const { username, password, fname, lname, admin } = user;
    return (<reactstrap_1.Col lg={{ size: 6, offset: 3 }}>
      <reactstrap_1.Card>
        <h2 style={{ textAlign: 'center' }}>User Settings</h2>
        <reactstrap_1.FormText color='muted' style={{ textAlign: 'center' }}>
          Note: All special characters will be removed
        </reactstrap_1.FormText>
        <reactstrap_1.CardBody>
          <reactstrap_1.Form>
            <reactstrap_1.Row>
              <reactstrap_1.Col>
                <reactstrap_1.FormGroup>
                  <reactstrap_1.Label for='username'>Username</reactstrap_1.Label>
                  <reactstrap_1.Input type='text' placeholder={username} id='username' onChange={onChange}/>
                </reactstrap_1.FormGroup>
              </reactstrap_1.Col>
            </reactstrap_1.Row>
            <reactstrap_1.Row>
              <reactstrap_1.Col sm={6}>
                <reactstrap_1.FormGroup>
                  <reactstrap_1.Label for='password'>Password</reactstrap_1.Label>
                  <reactstrap_1.Input type='password' placeholder={password} id='password' onChange={onChange}/>
                </reactstrap_1.FormGroup>
              </reactstrap_1.Col>
              <reactstrap_1.Col sm={6}>
                <reactstrap_1.FormGroup>
                  <reactstrap_1.Label for='confirmPassword'>Confirm Password</reactstrap_1.Label>
                  <reactstrap_1.Input type='password' placeholder={password} id='confirmPassword' onChange={onChange}/>
                </reactstrap_1.FormGroup>
              </reactstrap_1.Col>
            </reactstrap_1.Row>
            <reactstrap_1.Row>
              <reactstrap_1.Col sm={6}>
                <reactstrap_1.FormGroup>
                  <reactstrap_1.Label for='fname'>First Name</reactstrap_1.Label>
                  <reactstrap_1.Input type='text' placeholder={fname} id='fname' onChange={onChange}/>
                </reactstrap_1.FormGroup>
              </reactstrap_1.Col>
              <reactstrap_1.Col sm={6}>
                <reactstrap_1.FormGroup>
                  <reactstrap_1.Label for='lname'>Last Name</reactstrap_1.Label>
                  <reactstrap_1.Input type='text' placeholder={lname} id='lname' onChange={onChange}/>
                </reactstrap_1.FormGroup>
              </reactstrap_1.Col>
            </reactstrap_1.Row>
            <reactstrap_1.Row>
              <reactstrap_1.Col xs={{ size: 6, offset: 3 }}>
                <reactstrap_1.FormGroup check>
                  <p>Admininstrator: {admin}</p>
                </reactstrap_1.FormGroup>
              </reactstrap_1.Col>
            </reactstrap_1.Row>
            <reactstrap_1.Row>
              <reactstrap_1.Col xs={{ size: 4, offset: 4 }}>
                <reactstrap_1.Button onClick={submit}>Update</reactstrap_1.Button>
              </reactstrap_1.Col>
            </reactstrap_1.Row>
          </reactstrap_1.Form>
        </reactstrap_1.CardBody>
      </reactstrap_1.Card>
    </reactstrap_1.Col>);
};
exports.default = Settings;
//# sourceMappingURL=Settings.js.map