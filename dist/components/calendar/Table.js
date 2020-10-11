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
const react_redux_1 = require("react-redux");
const eventActions_1 = require("../../actions/eventActions");
const Event_1 = __importDefault(require("./Event"));
const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 0).getDate();
};
const Table = ({ events, byMonth, loadEvents }) => {
    const [date, setDate] = react_1.useState(new Date());
    const [listOfDates, setListOfDates] = react_1.useState([]);
    react_1.useEffect(() => {
        loadEvents();
        if (byMonth) {
            const startDate = new Date(date.getFullYear(), date.getMonth(), 0);
            const days = getDaysInMonth(date);
            for (let i = 0; i < days; i++) {
                startDate.setDate(startDate.getDate() + 1);
                setListOfDates((arr) => [...arr, new Date(startDate)]);
            }
        }
        else {
            for (let i = 0; i < 7; i++) {
                date.setDate(date.getDate() + 1);
                setListOfDates((arr) => [...arr, new Date(date)]);
            }
        }
    }, []);
    return (<div className='calendar-table'>
      {byMonth ? null : (<div className='scale'>
          <div>6a</div>
          <div>7a</div>
          <div>8a</div>
          <div>9a</div>
          <div>10a</div>
          <div>11a</div>
          <div>12p</div>
          <div>1p</div>
          <div>2p</div>
          <div>3p</div>
          <div>4p</div>
          <div>5p</div>
          <div>6p</div>
          <div>7p</div>
        </div>)}
      <div className='main-content'>
        <div className='header'>
          <div>Sunday</div>
          <div>Monday</div>
          <div>Tuesday</div>
          <div>Wednesday</div>
          <div>Thursday</div>
          <div>Friday</div>
          <div>Saturday</div>
        </div>
        {byMonth ? (<div className='month-by-month'>
            <div className='row'>
              {listOfDates
        .filter((date, index) => index < 7)
        .map((d) => (<div key={date.toISOString()} className='valid'>
                    {d.getDate()}
                  </div>))}
            </div>
            <div className='row'>
              {listOfDates
        .filter((date, index) => index <= 14 && index > 7)
        .map((d) => (<div className='valid'>{d.getDate()}</div>))}
            </div>
            <div className='row'>
              {listOfDates
        .filter((date, index) => index <= 21 && index > 14)
        .map((d) => (<div className='valid'>{d.getDate()}</div>))}
            </div>
            <div className='row'>
              {listOfDates
        .filter((date, index) => index > 21)
        .map((d) => (<div className='valid'>{d.getDate()}</div>))}
            </div>
            
          </div>) : (<div className='week-by-week'>
            {events.map((e) => (<Event_1.default key={e.id} byMonth={false} event={e}/>))}
          </div>)}
      </div>
    </div>);
};
const mapStateToProps = (state) => ({
    events: state.event.events
});
const mapDispatchToProps = {
    loadEvents: eventActions_1.loadEvents
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Table);
//# sourceMappingURL=Table.js.map