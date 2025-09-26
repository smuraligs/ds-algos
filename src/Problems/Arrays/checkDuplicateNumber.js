/**
 * Iterate through the num array, check if the current num is present in the set.
 * If present, duplicate exists. Otherwise no duplicates exist.
 * @param {} arr 
 * @returns 
 */
function checkDuplicateNumberExists(arr) {
    var seen = new Set();
    for(i in arr) {
        if (seen.has(arr[i])) {
            return true;
        }
        seen.add(arr[i]);
    }
    return false;
}

console.log(checkDuplicateNumberExists([1,2,3,4]));
console.log(checkDuplicateNumberExists([1,2,3,4,3]));
console.log(checkDuplicateNumberExists([1,2,3,4,1]));
console.log(checkDuplicateNumberExists([1,2,3,4,1,2]));
console.log(checkDuplicateNumberExists([1,2,3]));