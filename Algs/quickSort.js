import _ from 'lodash';

/*Quick sort
-Best-case performance:   O(n log n)
-Average performance:	    O(n log n)
-Worst-case performance:  O(n2)
*/
export function sort(arr) {
  //If array is empty or has only 1 el, than return that array
  if (arr.length < 2) return arr;

  const pivot = arr[0], left = [], right = [];
  //El's are sorted by pivot, if el < pivot, than we push it to left subarray and vice versa
  for (let i = 1; i < arr.length; i++) {
    pivot > arr[i] ? left.push(arr[i]) : right.push(arr[i]);
  }
  
  return sort(left).concat(pivot, sort(right));
};

//Optimised quick sort
export function opt_qsort(arr) {
  if (arr.length < 2) return arr;
  //Instead of taking first el of an array as a pivot, we choose pivot by random
  //There are a lot of cases when arr is already sorted, so low Big O to n log n
  const indexOfPivot = Math.floor(_.random(arr.length - 1));
  const pivot = arr[indexOfPivot], left = [], right = [];
  //Move pivot to the arr[0]
  arr.splice(indexOfPivot, 1);
  arr.unshift(pivot);

  for (let i = 1; i < arr.length; i++)
    pivot > arr[i] ? left.push(arr[i]) : right.push(arr[i]);

  return opt_qsort(left).concat(pivot, opt_qsort(right));
};