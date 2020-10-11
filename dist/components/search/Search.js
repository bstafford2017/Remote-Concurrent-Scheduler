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
const reactstrap_1 = require("reactstrap");
const SearchResult_1 = __importDefault(require("./SearchResult"));
const searchActions_1 = require("../../actions/searchActions");
const Search = ({ results, searchEvent }) => {
    const [searchInput, setSearchInput] = react_1.useState('');
    const onChange = (e) => {
        setSearchInput(e.target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        searchEvent(searchInput);
    };
    return (<>
      <reactstrap_1.Col lg={{ size: 8, offset: 2 }}>
        <reactstrap_1.Card>
          <reactstrap_1.CardHeader style={{ textAlign: 'center' }}>
            <h2>Search Events</h2>
            <reactstrap_1.FormText color='muted'>
              Note: All special characters will be removed
            </reactstrap_1.FormText>
          </reactstrap_1.CardHeader>
          <reactstrap_1.CardBody>
            <reactstrap_1.Form>
              <reactstrap_1.Row>
                <reactstrap_1.Col xs={{ size: 8, offset: 1 }}>
                  <reactstrap_1.FormGroup>
                    <reactstrap_1.Input type='text' placeholder='Enter title, building, room, date (i.e. YYYY/DD/MM) or username' value={searchInput} onChange={onChange}/>
                  </reactstrap_1.FormGroup>
                </reactstrap_1.Col>
                <reactstrap_1.Col xs={{ size: 2, offset: 1 }}>
                  <reactstrap_1.FormGroup>
                    <reactstrap_1.Col xs={2}>
                      <reactstrap_1.Button onClick={onSubmit}>Search</reactstrap_1.Button>
                    </reactstrap_1.Col>
                  </reactstrap_1.FormGroup>
                </reactstrap_1.Col>
              </reactstrap_1.Row>
            </reactstrap_1.Form>
          </reactstrap_1.CardBody>
        </reactstrap_1.Card>
      </reactstrap_1.Col>
      <reactstrap_1.Col lg={{ size: 8, offset: 2 }}>
        <reactstrap_1.Card>
          <reactstrap_1.CardBody>
            <reactstrap_1.Table responsive>
              <thead>
                <tr>
                  <th scope='col'>Title</th>
                  <th scope='col'>Date</th>
                  <th scope='col'>Start Time</th>
                  <th scope='col'>Start Time</th>
                  <th scope='col'>Building</th>
                  <th scope='col'>Room</th>
                  <th scope='col'>Recur Weekdays</th>
                  <th scope='col'>Recur End Date</th>
                  <th scope='col'>Created By</th>
                </tr>
              </thead>
              <tbody>
                {results.map((e) => (<SearchResult_1.default event={e}/>))}
              </tbody>
            </reactstrap_1.Table>
          </reactstrap_1.CardBody>
        </reactstrap_1.Card>
      </reactstrap_1.Col>
    </>);
};
const mapStateToProps = (state) => ({
    results: state.search
});
const mapDispatchToProps = {
    searchEvent: searchActions_1.searchEvent
};
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Search);
//# sourceMappingURL=Search.js.map