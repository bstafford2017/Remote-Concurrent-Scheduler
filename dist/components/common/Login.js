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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const CustomAlert_1 = __importDefault(require("./CustomAlert"));
const react_redux_1 = require("react-redux");
const reactstrap_1 = require("reactstrap");
const userActions_1 = require("../../actions/userActions");
const react_router_dom_1 = require("react-router-dom");
const initialState = {
    username: '',
    password: ''
};
const Login = ({ login }) => {
    const history = react_router_dom_1.useHistory();
    const [user, setUser] = react_1.useState(initialState);
    const onChange = (e) => {
        setUser(Object.assign(Object.assign({}, user), { [e.target.id]: e.target.value }));
    };
    const attemptLogin = (e) => {
        if (user.username && user.password) {
            login(user);
            history.push('/home');
        }
    };
    return (<reactstrap_1.Col sm={{ size: 10, offset: 1 }} lg={{ size: 4, offset: 4 }}>
      <reactstrap_1.Card>
        <h2 style={{ textAlign: 'center' }}>Login</h2>
        <reactstrap_1.CardBody>
          <CustomAlert_1.default display={false} text={''}/>
          <reactstrap_1.Form>
            <reactstrap_1.FormGroup>
              <reactstrap_1.Label for='username'>Username</reactstrap_1.Label>
              <reactstrap_1.Input type='text' id='username' onChange={onChange}/>
            </reactstrap_1.FormGroup>
            <reactstrap_1.FormGroup>
              <reactstrap_1.Label for='password'>Password</reactstrap_1.Label>
              <reactstrap_1.Input type='password' id='password' onChange={onChange}/>
            </reactstrap_1.FormGroup>
            <reactstrap_1.Col sm={{ size: 6, offset: 3 }} lg={{ size: 4, offset: 4 }}>
              <reactstrap_1.Button onClick={attemptLogin}>Login</reactstrap_1.Button>
            </reactstrap_1.Col>
          </reactstrap_1.Form>
        </reactstrap_1.CardBody>
      </reactstrap_1.Card>
    </reactstrap_1.Col>);
};
Login.propTypes = {};
const mapStateToProps = (state) => ({});
const mapDispatchToProps = {
    login: userActions_1.login
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Login);
//# sourceMappingURL=Login.js.map