// Code your solution in this file!
const returnFirstTwoDrivers = (array) => {
    return [array[0], array[1]]
}

const returnLastTwoDrivers = (array) => {
    return [array[array.length - 2], array[array.length - 1]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

let createFareMultiplier = (muliplier) => {
    return function newFare(fare) {
        return fare * muliplier
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (arrayOfDrivers, chooser) => {
    return chooser(arrayOfDrivers)
}