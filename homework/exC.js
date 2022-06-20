// 1. a) Declare and initialise an array with the below 5 names and ages (hint: each array item will be its own array like [[202, "Barbara", 31], ...])
//  i. 202,"Barbara", 31
//  ii. 203,"David", 22
//  iii. 204,"Alex", 35
//  iv. 205,"Sue", 24

const initArray = [[201, "Casey", 30], [202, "Barbara", 31], [203, "David", 22], [204, "Alex", 35], [205, "Sue", 24]]

// b) Log the length of the array
console.log(initArray.length)

// c) Log the last element in the array
console.log(initArray[initArray.length - 1])

// d) Add John who is 45 years old with id 206 to the end of the array (on a new line, without just writing it into the initial array)
const newArray = [...initArray, [206, "John", 45]]

// e) Remove the first item from the array (on a new line, without just going up above and editing the code of the initial array)
console.log(newArray.slice(1))

// Come back to challenges if rest of work is all complete
// Challenge - Use a for loop through the array to search for ID = 205 and update Sue’s name to Susan
for (let i = 0; i < initArray.length; i++) {
  if (initArray[i][0] === 205) {
    initArray[i][1] = 'Susan'
  }
}
console.log(initArray)

// Challenge - Remove an item from the middle of the array. ID=204
const removedArray = initArray.filter(item => {
  return item[0] !== 204
})
console.log(removedArray)