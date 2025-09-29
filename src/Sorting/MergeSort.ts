/**
 * Split the array into two sub arrays, sort them separately and merge it back.
 * When we split the array repeatedly, each subarray end up having only one element in it.
 * 
 * Time Complexity:
 *  Best Case: O(n log n), 
 *  Average Case: O(n log n)
 *  Worst Case: O(n log n)
 * 
 * Space complexity:
 *  O(n) - additional space required for merging subarrays;
 */

class MergeSort {
    static sort(arr) {
        if (arr.length == 1) return arr;
        let arr1 = arr.slice(0, (arr.length/2));
        let arr2 = arr.slice((arr.length/2), arr.length);
        arr1 = this.sort(arr1);
        arr2 = this.sort(arr2);
        let result = this.merge(arr1, arr2);
        return result;
    }

    static merge(arr1, arr2) {
        let mergedArr = [];
        while(arr1.length && arr2.length) {
            if(arr1[0] > arr2[0]) {
                mergedArr.push(arr2[0]);
                arr2.splice(0,1);
            } else {
                mergedArr.push(arr1[0]);
                arr1.splice(0,1);
            }
        }
        if(arr1.length) {
            mergedArr = mergedArr.concat(arr1);
        }
        if(arr2.length) {
            mergedArr = mergedArr.concat(arr2);
        }
        return mergedArr;
    }
}


var inputs = [
    [1,2,3,4],
    [2,3,4,1],
    [1,4,3,2],
    [1,2,3,0],
    [9,8,7,6]
  ]
  for(let i = 0; i<inputs.length; i++) {
    console.log(MergeSort.sort(inputs[i]));
  }