"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Banner_1 = __importDefault(require("../common/Banner"));
const react_router_dom_1 = require("react-router-dom");
const Header = ({ next, previous }) => {
    const location = react_router_dom_1.useLocation();
    return location.pathname === '/home' ? (<>
      <div className='navbar-header'>
        <Banner_1.default absolute/>
        <div className='month'>
          <ul>
            <li id='month'>January</li>
            <li id='prev' className='change'>
              <react_router_dom_1.Link to='#' onClick={previous}>
                &#10094;
              </react_router_dom_1.Link>
            </li>
            <li style={{ fontSize: '17px' }}>
              <input id='by-week' type='radio' name='selector' value='week'/>
              <label htmlFor='by-week'> By Week</label>
              <input id='by-month' type='radio' name='selector' value='month' defaultChecked/>
              <label htmlFor='by-month'> By Month</label>
            </li>
            <li id='next' className='change'>
              <react_router_dom_1.Link to='#' onClick={next}>
                &#10095;
              </react_router_dom_1.Link>
            </li>
          </ul>
        </div>
      </div>
    </>) : (<div className='navbar-header'>
      <Banner_1.default />
    </div>);
};
exports.default = Header;
//# sourceMappingURL=Header.js.map