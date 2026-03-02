/**
 * @param {number[]} numbers
 * @return {boolean}
 */
function findDuplicates(numbers) {
  let map = new Map();

  for (let num of numbers) {
    if (map.has(num)) {
      return true;
    }
    map.set(num, (map.get(num) ?? 0) + 1);
  }
  return false;

  /* OR 

  let set = new Set(numbers);

  return set.size === numbers.length

  */
}

console.log(findDuplicates[2,3,4,6,3]) // true
