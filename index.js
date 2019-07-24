// Code your solution in this file!
const returnFirstTwoDrivers = function(arr) {
  return [arr[0], arr[1]]
}

const returnLastTwoDrivers = function(arr) {
  return [arr[arr.length - 2], arr[arr.length - 1]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
  let innerFunction = function(arg) {
    return int * arg
  }
  return innerFunction
}

const fareDoubler = function(int) {
  let innerFunction = function() {
    return int * 2
  }
  return innerFunction()
}

const fareTripler = function(int) {
  let innerFunction = function() {
    return int * 3
  }
  return innerFunction()
}

function selectDifferentDrivers(arr, func) {
  return func(arr)
}
