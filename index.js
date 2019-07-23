// Code your solution in this file!
const returnFirstTwoDrivers = function (arr) {
    return arr.slice(0, 2)
}

const returnLastTwoDrivers = function (arr) {
    let l = arr.length
    return arr.slice(l - 2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
    return function (fare) {
        return fare * int
        // why is the return here required?
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function (driversArr, fx) {
    return fx(driversArr)
}