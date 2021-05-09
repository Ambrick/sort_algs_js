/*Merge sort
-Worst-case performance:  O(n(log n))
-Best-case performance:   О(n(log n))
-Average performance:	    О(n(log n))
*/
export function sort(arr) {
  //If array is empty or has only 1 el, than return that array
  if (arr.length < 2) return arr;
  
  function mergeArrays(l_arr, r_arr) {
    const mergedArr = [];
    //Check the lowest el in first indexes of left and right arrays,
    //than push it to the new "mergedArray"
    while (l_arr.length && r_arr.length) {
      mergedArr.push(l_arr[0] > r_arr[0] ? r_arr.shift() : l_arr.shift());
    }
    //Merge to sorted array remainings from left and right parts, there can be leftovers after previous step
    return mergedArr.concat(l_arr, r_arr);
  };
  //Cut the half of the array and sort it, than sort the remaining part,
  //than merge theese sorted parts
  return mergeArrays(sort(arr.splice(0, Math.floor(arr.length / 2))), sort(arr));
};

