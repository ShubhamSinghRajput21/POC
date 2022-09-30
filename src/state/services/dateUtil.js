import moment from 'moment';

class DateUtilService {
  static findDifferenceInHours(timestamp) {
    const a = moment(timestamp);
    const b = moment();
    return b.diff(a, 'hours');
  }
  static findDifferenceInYears(timestamp) {
    const a = moment(timestamp);
    const b = moment();
    return b.diff(a, 'years');
  }
}

export default DateUtilService;
