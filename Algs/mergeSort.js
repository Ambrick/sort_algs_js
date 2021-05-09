/**
 * The implementation of `Merge sort`.
 *
 *-Worst-case performance:  O(n(log n))
 *-Best-case performance:   О(n(log n))
 *-Average performance:	    О(n(log n))
 *
 * @private
 * @param {arr} object The Array to sort.
 * @returns {Array} Returns `Array`.
 */

export function sort(arr) {
  //If array is empty or has only 1 el, than return that array
  if (arr.length < 2) return arr;
  
  function mergeArrays(l_arr, r_arr) {
    const mergedArr = [];
    //Push the lowest el between the first indexes of left and right arrays to the "mergedArray"
    //for the full lengths of left and right arrays
    while (l_arr.length && r_arr.length) {
      mergedArr.push(l_arr[0] > r_arr[0] ? r_arr.shift() : l_arr.shift());
    }
    //Add to sorted array remainings from left and right parts. There can be leftovers after previous step
    return mergedArr.concat(l_arr, r_arr);
  };
  //Sort left and right parts of the array and than merge them
  return mergeArrays(sort(arr.splice(0, Math.floor(arr.length / 2))), sort(arr));
};

