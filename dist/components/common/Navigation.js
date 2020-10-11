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
const react_redux_1 = require("react-redux");
const routes_1 = require("../routes");
const reactstrap_1 = require("reactstrap");
const react_router_dom_1 = require("react-router-dom");
const Navigation = (props) => {
    const { isAuthenticated, isAdmin } = props;
    const [collapsed, setCollapsed] = react_1.useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);
    return (<>
      {isAuthenticated ? (<reactstrap_1.Navbar expand='md' dark>
          <reactstrap_1.NavbarToggler onClick={toggleNavbar} className='mr-2'/>
          <reactstrap_1.Collapse isOpen={!collapsed} navbar>
            <reactstrap_1.Nav className='mr-auto' navbar>
              <reactstrap_1.NavItem>
                <reactstrap_1.NavLink to={routes_1.HOME_URL} tag={react_router_dom_1.NavLink}>
                  Home
                </reactstrap_1.NavLink>
              </reactstrap_1.NavItem>
              <reactstrap_1.NavItem>
                <reactstrap_1.NavLink to={routes_1.SEARCH_URL} tag={react_router_dom_1.NavLink}>
                  Search
                </reactstrap_1.NavLink>
              </reactstrap_1.NavItem>
              <reactstrap_1.NavItem>
                <reactstrap_1.NavLink to={routes_1.SETTINGS_URL} tag={react_router_dom_1.NavLink}>
                  Settings
                </reactstrap_1.NavLink>
              </reactstrap_1.NavItem>
              {isAdmin ? (<>
                  <reactstrap_1.NavItem>
                    <reactstrap_1.NavLink to={routes_1.BUILDINGS_URL} tag={react_router_dom_1.NavLink}>
                      Manage Buildings
                    </reactstrap_1.NavLink>
                  </reactstrap_1.NavItem>
                  <reactstrap_1.NavItem>
                    <reactstrap_1.NavLink to={routes_1.ROOMS_URL} tag={react_router_dom_1.NavLink}>
                      Manage Rooms
                    </reactstrap_1.NavLink>
                  </reactstrap_1.NavItem>
                  <reactstrap_1.NavItem>
                    <reactstrap_1.NavLink to={routes_1.USERS_URL} tag={react_router_dom_1.NavLink}>
                      Manage Users
                    </reactstrap_1.NavLink>
                  </reactstrap_1.NavItem>
                </>) : null}
            </reactstrap_1.Nav>
            <reactstrap_1.Nav className='ml-auto'>
              <reactstrap_1.NavItem>
                <reactstrap_1.NavLink to='#'>Sign Out</reactstrap_1.NavLink>
              </reactstrap_1.NavItem>
            </reactstrap_1.Nav>
          </reactstrap_1.Collapse>
        </reactstrap_1.Navbar>) : (<reactstrap_1.Navbar expand='md' dark>
          <reactstrap_1.NavbarToggler onClick={toggleNavbar} className='mr-2'/>
          <reactstrap_1.Collapse isOpen={!collapsed} navbar>
            <reactstrap_1.Nav className='mr-auto' navbar>
              <reactstrap_1.NavItem>
                <reactstrap_1.NavLink to={routes_1.LOGIN_URL} tag={react_router_dom_1.NavLink}>
                  Home
                </reactstrap_1.NavLink>
              </reactstrap_1.NavItem>
            </reactstrap_1.Nav>
          </reactstrap_1.Collapse>
        </reactstrap_1.Navbar>)}
    </>);
};
const mapStateToProps = (state) => {
    var _a;
    return ({
        isAuthenticated: state.user.isAuthenticated,
        isAdmin: (_a = state.user.user) === null || _a === void 0 ? void 0 : _a.admin
    });
};
exports.default = react_redux_1.connect(mapStateToProps)(Navigation);
//# sourceMappingURL=Navigation.js.map