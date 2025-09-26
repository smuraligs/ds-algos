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
        while(arr1.length) {
            mergedArr.push(arr1[0]);
            arr1.splice(0,1);
        }
        while(arr2.length) {
            mergedArr.push(arr2[0]);
            arr2.splice(0,1);
        }
        return mergedArr;
    }
}

console.log("Result:", MergeSort.sort([4,3,2,1]));
console.log("Result:", MergeSort.sort([4,1,2,3]));
console.log("Result:", MergeSort.sort([5,2,3,1]));
console.log("Result:", MergeSort.sort([5,2,3,1,4]));
