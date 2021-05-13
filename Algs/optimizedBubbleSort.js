/**
 * The implementation of `Optimized quick sort`.
 *
 *-Best-case performance:   
 *-Average performance:	    
 *-Worst-case performance:  
 *
 * @private
 * @param {arr} object The Array to sort.
 * @returns {Array} Returns `Array`.
 */

function optimizedBubbleSort(arr) {
  let swapped = false;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (swapped == false) break;
  }
  return arr;
};

export default optimizedBubbleSort
