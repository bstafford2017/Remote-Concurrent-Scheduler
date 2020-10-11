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
const react_router_dom_1 = require("react-router-dom");
const userActions_1 = require("./actions/userActions");
const react_redux_1 = require("react-redux");
const store_1 = __importDefault(require("./store"));
require("../node_modules/bootstrap/dist/css/bootstrap.min.css");
require("./styles/calendar/items.css");
require("./styles/calendar/modal.css");
require("./styles/calendar/table.css");
require("./styles/header.css");
require("./styles/navbar.css");
require("./styles/common.css");
const Login_1 = __importDefault(require("./components/common/Login"));
const Header_1 = __importDefault(require("./components/calendar/Header"));
const AuthRoute_1 = __importDefault(require("./components/common/AuthRoute"));
const Footer_1 = __importDefault(require("./components/common/Footer"));
const Settings_1 = __importDefault(require("./components/common/Settings"));
const Search_1 = __importDefault(require("./components/search/Search"));
const Home_1 = __importDefault(require("./components/calendar/Home"));
const ManageBuildings_1 = __importDefault(require("./components/buildings/ManageBuildings"));
const ManageRooms_1 = __importDefault(require("./components/rooms/ManageRooms"));
const ManageUsers_1 = __importDefault(require("./components/users/ManageUsers"));
const NotFound_1 = __importDefault(require("./components/common/NotFound"));
const Spinner_1 = __importDefault(require("./components/common/Spinner"));
const Navigation_1 = __importDefault(require("./components/common/Navigation"));
const Live_1 = __importDefault(require("./components/calendar/Live"));
const routes_1 = require("./components/routes");
const App = (props) => {
    var _a;
    react_1.useEffect(() => {
        store_1.default.dispatch(userActions_1.loadUser());
    }, []);
    const { isAuthenticated = false, isLoading = false } = store_1.default.getState().user;
    const isAdmin = ((_a = store_1.default.getState().user.user) === null || _a === void 0 ? void 0 : _a.admin) || false;
    const next = (e) => { };
    const previous = (e) => { };
    return (<react_redux_1.Provider store={store_1.default}>
      {isLoading ? (<Spinner_1.default />) : (<>
          <react_router_dom_1.BrowserRouter>
            <react_router_dom_1.Route path={routes_1.LOGIN_URL} component={() => (<>
                  <Header_1.default next={next} previous={previous}/>
                  <Navigation_1.default isAdmin={isAdmin} isAuthenticated={isAuthenticated}/>
                </>)}/>
            <div className='content'>
              <react_router_dom_1.Switch>
                <react_router_dom_1.Route exact path={routes_1.LOGIN_URL} component={Login_1.default}/>
                <react_router_dom_1.Route path={routes_1.LIVE_URL} component={Live_1.default}/>
                <AuthRoute_1.default path={routes_1.HOME_URL} component={Home_1.default}/>
                <AuthRoute_1.default path={routes_1.SEARCH_URL} component={Search_1.default}/>
                <AuthRoute_1.default path={routes_1.SETTINGS_URL} component={Settings_1.default}/>
                <AuthRoute_1.default path={routes_1.BUILDINGS_URL} component={ManageBuildings_1.default}/>
                <AuthRoute_1.default path={routes_1.ROOMS_URL} component={ManageRooms_1.default}/>
                <AuthRoute_1.default path={routes_1.USERS_URL} component={ManageUsers_1.default}/>
                <react_router_dom_1.Route path='*' component={NotFound_1.default}/>
              </react_router_dom_1.Switch>
            </div>
          </react_router_dom_1.BrowserRouter>
          <Footer_1.default />
        </>)}
    </react_redux_1.Provider>);
};
exports.default = App;
//# sourceMappingURL=App.js.map