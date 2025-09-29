/**
 * This is like sorting a deck of cards in hand.
 * 1. Take a card out (pivot card), usually the second card to begin with. Compare it with all the previous cards one by one.
 * 2. If the previous card is greater than pivot card, move that card to one step right.
 * 3. If the previous card is smaller, insert the previous card to the right of the smaller card.
 * 4. Repeat the above steps by considering the pivot card from 1 - n.
 * 
 * Time Complexity:
 *  Best case: O(n)
 *  Average case: O(n2)
 *  Worse case: O(n2)
 * 
 * Space complexity:
 *  O(1);
 */

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

var inputs = [
  [1,2,3,4],
  [2,3,4,1],
  [1,4,3,2],
  [1,2,3,0],
  [9,8,7,6]
]
for(let i = 0; i<inputs.length; i++) {
  console.log(InsertionSort.sort(inputs[i]));
}