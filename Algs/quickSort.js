/**
 * The implementation of `Quick sort`.
 *
 *-Best-case performance:   O(n log n)
 *-Average performance:	    O(n log n)
 *-Worst-case performance:  O(n2)
 *
 * @private
 * @param {arr} object The Array to sort.
 * @returns {Array} Returns `Array`.
 */

function quickSort(arr) {
  //If array is empty or has only 1 el, than return that array
  if (arr.length < 2) return arr;

  const pivot = arr[0], left = [], right = [];
  //El's are sorted by pivot, if el < pivot, than we push it to left subarray and vice versa
  for (let i = 1; i < arr.length; i++) {
    pivot > arr[i] ? left.push(arr[i]) : right.push(arr[i]);
  }

  return quickSort(left).concat(pivot, quickSort(right));
};

export default quickSort
