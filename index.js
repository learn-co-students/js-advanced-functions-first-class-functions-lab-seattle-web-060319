const returnFirstTwoDrivers = function(arr){
  let newArr = []
  newArr = [...arr.splice(0, 2)]
  return newArr
}
