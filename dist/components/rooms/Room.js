"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const reactstrap_1 = require("reactstrap");
const Room = (props) => {
    const { room } = props;
    return (<tr id={room.id}>
      <td>
        <reactstrap_1.Input type='text' placeholder={room.number}/>
      </td>
      <td>
        <reactstrap_1.Input type='text' placeholder={room.seats}/>
      </td>
      <td>
        <reactstrap_1.Input type='select'>
          <option value='0' selected={room.projector === 0}>
            False
          </option>
          <option value='1' selected={room.projector === 1}>
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
Room.propTypes = {
    room: prop_types_1.default.object.isRequired
};
exports.default = Room;
//# sourceMappingURL=Room.js.map