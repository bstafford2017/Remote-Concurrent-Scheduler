"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasToken = exports.weekdaysToString = exports.timeConversion = exports.formatDate = void 0;
function formatDate(date) {
    const unformatted = date.split('T')[0].split('-');
    return unformatted[1] + '-' + unformatted[2] + '-' + unformatted[0];
}
exports.formatDate = formatDate;
function timeConversion(time) {
    const splitTime = time.split(':');
    const hours = parseInt(splitTime[0]) % 12 || 12;
    const minutes = parseInt(splitTime[1]);
    const AmOrPm = hours >= 12 ? 'pm' : 'am';
    return hours + ':' + minutes + AmOrPm;
}
exports.timeConversion = timeConversion;
function weekdaysToString(weekdays) {
    return weekdays.split('').reduce((total, next, index) => {
        return (total += getWeekDayString(index));
    });
}
exports.weekdaysToString = weekdaysToString;
function hasToken() {
    return !!localStorage.getItem('token');
}
exports.hasToken = hasToken;
function getWeekDayString(index) {
    switch (index) {
        case 0:
            return 'Sun ';
        case 1:
            return 'Mon ';
        case 2:
            return 'Tues ';
        case 3:
            return 'Wed ';
        case 4:
            return 'Thur ';
        case 5:
            return 'Fri ';
        case 6:
            return 'Sat ';
        default:
            return '';
    }
}
//# sourceMappingURL=index.js.map