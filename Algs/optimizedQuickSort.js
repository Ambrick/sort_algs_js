import  random  from 'lodash';

/**
 * The implementation of `Optimized quick sort`.
 *
 *-Best-case performance:   O(n log n)
 *-Average performance:	    O(n log n)
 *-Worst-case performance:  O(n log n)
 *
 * @private
 * @param {arr} object The Array to sort.
 * @returns {Array} Returns `Array`.
 */

function optimizedQuickSort(arr) {
  if (arr.length < 2) return arr;
  //Instead of taking first el of an array as a pivot, we choose pivot by random
  //There are a lot of cases when arr is already sorted, so low Big O to (n log n)
  const pivot = arr.splice(~~random(arr.length - 1), 1), left = [], right = [];

  while (arr.length)
    pivot > arr[0] ? left.push(arr.shift()) : right.push(arr.shift());

  return optimizedQuickSort(left).concat(pivot, optimizedQuickSort(right));
};

export default optimizedQuickSort