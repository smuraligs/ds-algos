/**
 * An anagram is a string that contains the exact same characters as another string, 
 * but the order of the characters can be different.
 * 
 * Solution Logic:
 *  1. If both strings are of different length, it is not anagram.
 *  2. When same length, create two objects (one for each string) and
 *      a. iterate through the string 
 *      b. in both objects, push each character and incr it's count
 *      c. Finally compare if both objects have same key:value pair. If yes, both are anagrams. Otherwise not.
 * @param {*} s1 
 * @param {*} s2 
 * @returns 
 */
function isAnagram(s1, s2) {
    if (s1.length != s2.length) {
        return false;
    }
    var o1={}, o2={};
    for(let i=0;i<s1.length; i++) {
        o1[s1[i]] = (o1[s1[i]] || 0) + 1;
        o2[s2[i]] = (o2[s2[i]] || 0) + 1;
    }
    for(const key in o1){
        if (o1[key] != o2[key]) {
            return false;
        }
    }

    return true;
}
console.log(isAnagram('abc', 'cba'));
console.log(isAnagram('abc', 'cbaa'));
console.log(isAnagram('abc', 'cac'));
console.log(isAnagram('abc', 'abc'));
