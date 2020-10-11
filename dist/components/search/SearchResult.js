"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const utils_1 = require("../../utils");
const SearchResult = ({ event }) => {
    var _a, _b, _c, _d, _e, _f;
    return (<tr id={(_a = event === null || event === void 0 ? void 0 : event.id) === null || _a === void 0 ? void 0 : _a.toString()}>
      <td>{event === null || event === void 0 ? void 0 : event.title}</td>
      <td>{utils_1.formatDate(event === null || event === void 0 ? void 0 : event.date)}</td>
      <td>{utils_1.timeConversion(event === null || event === void 0 ? void 0 : event.startTime)}</td>
      <td>{utils_1.timeConversion(event === null || event === void 0 ? void 0 : event.endTime)}</td>
      <td>{(_b = event === null || event === void 0 ? void 0 : event.room) === null || _b === void 0 ? void 0 : _b.building}</td>
      <td>{(_c = event === null || event === void 0 ? void 0 : event.room) === null || _c === void 0 ? void 0 : _c.number}</td>
      <td>{(event === null || event === void 0 ? void 0 : event.recur) ? utils_1.weekdaysToString((_d = event === null || event === void 0 ? void 0 : event.recur) === null || _d === void 0 ? void 0 : _d.weekdays) : '-'}</td>
      <td>{(event === null || event === void 0 ? void 0 : event.recur) ? utils_1.formatDate((_e = event === null || event === void 0 ? void 0 : event.recur) === null || _e === void 0 ? void 0 : _e.end) : '-'}</td>
      <td>{(_f = event === null || event === void 0 ? void 0 : event.user) === null || _f === void 0 ? void 0 : _f.username}</td>
    </tr>);
};
SearchResult.propTypes = {
    event: prop_types_1.default.object.isRequired
};
exports.default = SearchResult;
//# sourceMappingURL=SearchResult.js.map