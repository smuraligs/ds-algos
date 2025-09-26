/**
 * 1. For every string, form a key (which is a string of 26 numbers separated by commas). The numbers indicate the count of each alphabets[a-z] in the string.
 *      for eg. string 'abdd' will have key as "1,1,0,2,0,0...."
 * 2. Insert this key:[str1, str3] into the result object. 
 *      eg. {   "1,1,0,0,0,..":["ab", "ba"], 
 *              "0,1,1,0,0,..":['bc','cb'] 
 *          }
 * 3. Print the values of the res object.
 * @param {} strs 
 * @returns 
 */
function groupAnagrams(strs) {
    let res = {};
    strs.forEach(function(str, i) {
        let countArr = new Array(26).fill(0);
        console.log("str is ", str);

        for (let c of str) {
            console.log("c is ", c);
            let index = c.charCodeAt(0) - 'a'.charCodeAt(0);
            countArr[index] += 1;
        }
        let joinedStr = countArr.join(',');
        console.log("joinedStr is ", joinedStr);
        if(!res[joinedStr]) {
            res[joinedStr] = [];
        }
        res[joinedStr].push(str);
        console.log("res is ", res, "\n\n");
    });
    return Object.values(res);
}

let inp1 = ["act","pots","tops","cat","stop","hat"];
let inp2 = ["x"]
let inp3 = ["x", "y", "z"];
let inp4 = ["bdddddddddd","bbbbbbbbbbc"]
// console.log(groupAnagrams(inp1));
// console.log(groupAnagrams(inp2));
// console.log(groupAnagrams(inp3));
console.log(groupAnagrams(inp4));