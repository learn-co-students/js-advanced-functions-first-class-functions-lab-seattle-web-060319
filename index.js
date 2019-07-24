const returnFirstTwoDrivers = function(arr) {
    let newArr = []
    for (let i = 0; i < 2; i++) {
        newArr.push(arr[i])
    }
    return newArr
}

const returnLastTwoDrivers = function(arr) {
    let newArr = []
    for (let i = arr.length - 2; i < arr.length; i++) {
        newArr.push(arr[i])
    }
    return newArr
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(int) {
    return function(arg){
      return int * arg
    }
}

const fareDoubler = function(fare) {
    return (fare * 2)
}

const fareTripler = function(fare) {
    return (fare * 3)
}

const selectDifferentDrivers = function(arr, arg) {
   return arg(arr)
}