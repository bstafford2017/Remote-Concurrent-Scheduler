"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const reactstrap_1 = require("reactstrap");
const User = (props) => {
    var _a, _b;
    const { user } = props;
    return (<tr id={(_b = (_a = user.id) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : 'user'}>
      <td>
        <reactstrap_1.Input type='text' placeholder={user.username}/>
      </td>
      <td>
        <reactstrap_1.Input type='password' placeholder={user.password}/>
      </td>
      <td>
        <reactstrap_1.Input type='text' placeholder={user.fname}/>
      </td>
      <td>
        <reactstrap_1.Input type='text' placeholder={user.lname}/>
      </td>
      <td>
        <reactstrap_1.Input type='select'>
          <option value='0' selected={!user.admin ? true : false}>
            False
          </option>
          <option value='1' selected={user.admin ? true : false}>
            True
          </option>
        </reactstrap_1.Input>
      </td>
      <td>
        <reactstrap_1.Button className='update-room'>Update</reactstrap_1.Button>
      </td>
      <td>
        <reactstrap_1.Button className='delete-room'>Delete</reactstrap_1.Button>
      </td>
    </tr>);
};
User.propTypes = {
    user: prop_types_1.default.object.isRequired
};
exports.default = User;
//# sourceMappingURL=User.js.map