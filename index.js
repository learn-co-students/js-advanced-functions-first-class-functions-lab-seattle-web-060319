const returnFirstTwoDrivers = function (drivers) {

  return drivers.slice(0,2);
};

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (multiplyValue) {
  return function (value) {
    return multiplyValue * value;
  };
};

const fareDoubler = function (fares) {
  return (fares*2);
};

const fareTripler = function (fares) {
  return (fares*3);
};

const selectDifferentDrivers = function (arrayOfDrivers, jawn) {
  return jawn(arrayOfDrivers);
};
