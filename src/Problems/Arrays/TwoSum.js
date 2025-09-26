/**
 * Check if an number array contains a pair of numbers that sums up to the given integer. Assume only one such pair exists in the array.
 * Solution:
 *  1. Create a map (used to look up for compliment number).
 *  2. iterate the num array.
 *  3. For each number, check if the compliment number (diff number) exists in the map.
 *  4. If exists, return the compliment number's index and current iterated index.
 *  5. If not exists, push the {number: index} into the map
 *   
 * @param {} numArr 
 */
function twoSum(numArr, sum) {
  let map = new Map();
  let result = [];
  numArr.forEach((val, i)  => {
    let cNum = sum - val;
    if(map.has(cNum)) {
      let cIndex = map.get(cNum);
      result.push(cIndex, i);
    }
    map.set(val, i);
  });
  return result;
}

console.log(twoSum([2,3,3,5], 7));
console.log(twoSum([2,3,4,1], 7));
