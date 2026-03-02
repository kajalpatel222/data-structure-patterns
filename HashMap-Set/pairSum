/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
function pairSum(numbers, target) {
  // iterate and create a freq map
  //calculate complement = target - numbers[i]
  //if(map.has(complement)) -> return its index along with the one in map
  let map = new Map();
  for(let i=0; i<numbers.length; i++){ 
    let complement = target - numbers[i];

    if(map.has(complement)){

      return [map.get(complement), i]

    } else{
      map.set(numbers[i], i);
    }
  }
}

console.log(pairSum([2, 7, 11, 15], 9)) // [0, 1]
