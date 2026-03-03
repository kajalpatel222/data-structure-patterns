// findMissingNumberInSequence.js
/**
 * @param {number[]} numbers
 * @return {number}
 */
function findMissingNumberInSequence(numbers) {
  let actualSum = 0;
  let expectedSum = 0;

  for (let num of numbers) {
    actualSum += num;
  }

  for (let i = 0; i <= numbers.length; i++) {
    expectedSum += i;
  }

  return expectedSum - actualSum;
}

console.log(findMissingNumberInSequence([0, 1, 3, 4, 5])) // 2
