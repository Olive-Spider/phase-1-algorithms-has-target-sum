function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {

    //find a number in the array that currently complements our target when summed up
    //this number is called sumArray. When added to a number in the array it should 
    // return the target.
    const sumArray = target - array[i];

    //loop through all the numbers in the array
    for (let j = i + 1; j < array.length; j++){
      if (array[j] === sumArray) 
      return true;
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  Quadratic Time
*/

/* 
  Add your pseudocode here
  loop through the array and find each number
  pair two numbers and sum them up
  if any two numbers in the array sum up to target return true
  if not return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
