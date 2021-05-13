/**
 * The implementation of `Selection sort`.
 *
 *-Best-case performance:   О(n2) comparisons, O(1) swaps
 *-Average performance:	    О(n2) comparisons, О(n) swaps
 *-Worst-case performance:	О(n2) comparisons, О(n) swaps
 *
 * @private
 * @param {arr} object The Array to sort.
 * @returns {Array} Returns `Array`.
 */

function selectionSort(arr) {
  //i - boundary index between sorted and unsorted parts
  for (let i = 0; i < arr.length - 1; i++)
    for (let j = i + 1; j < arr.length; j++)
    //Choose the lowest element of the ansorted array and put in a boundary position
        if (arr[i] > arr[j]) 
          [arr[i], arr[j]] = [arr[j], arr[i]];

  return arr;
};

export default selectionSort
