class InsertionSort {
  static sort(arr:Array<number>) {
    for (let pivotIndex = 1; pivotIndex < arr.length; pivotIndex++) {
      let pivotVal = arr[pivotIndex];
      let prevIndex = pivotIndex-1;
      while(prevIndex>=0 && arr[prevIndex] > pivotVal) {
        arr[prevIndex+1] = arr[prevIndex];
        prevIndex = prevIndex - 1;
      }
      arr[prevIndex + 1] = pivotVal;
    }
    return arr;
  }
}

console.log(InsertionSort.sort([1,2,3,4]));
console.log(InsertionSort.sort([2,3,4,1]));
console.log(InsertionSort.sort([1,4,3,2]));
console.log(InsertionSort.sort([1,2,3,0]));
console.log(InsertionSort.sort([9,8,7,6]));