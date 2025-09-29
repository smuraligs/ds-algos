/**
 * Selection sort is an in-place comparison sorting algorithm 
 * that works by repeatedly finding the minimum element from the unsorted part of the array 
 * and putting it at the beginning of the unsorted region. 
 * 
 *  Time Complexity:
 *  Best case: O(n2)
 *  Average case: O(n2)
 *  Worse case: O(n2)
 */

class SelectioSort {
  static sort(arr) {
    for(let i = 0; i<arr.length; i++) {
      let minIndex = i;
      for(let j = i+1; j< arr.length; j++) {
        if(arr[minIndex] > arr[j]) {
          minIndex = j;
        }
      }
      //swap minIndex with 0;
      let temp = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = temp;
    }
    return arr;
  }
}

var inputs = [
  [4,2,3,1],
  [5,3,4,2,1],
  [3,4,5],
  [1,2,3,4]
];

for(let i = 0; i<inputs.length; i++) {
  console.log(SelectioSort.sort(inputs[i]));
}
