/**
 * The implementation of `Insertion sort`.
 *
 *-Best-case performance:   O(n)  comparisons, O(1) swaps
 *-Average performance:	    О(n2) comparisons and swaps
 *-Worst-case performance:  О(n2) comparisons and swaps
 *
 * @private
 * @param {arr} object The Array to sort.
 * @returns {Array} Returns `Array`.
 */

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    //j = i is a boundary index between sorted and unsorted parts
    let j = i;
    //Пока эл. из несортированной части < эл. из сортированной части
    //Swap el's till el from unsorted part > than el from sorted part
    while (arr[j] < arr[j - 1] && j > 0) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      j--;
    }
  }
  return arr;
};

export default insertionSort
