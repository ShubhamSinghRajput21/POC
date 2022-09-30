
class Reporter {
  static putError = (type, err) => {
    console.log(`Error in ${type} : ${err}`);
  }
}

export default Reporter;
