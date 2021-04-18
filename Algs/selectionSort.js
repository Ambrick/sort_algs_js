/*Selection sort
-Worst-case performance:	О(n2) comparisons, О(n) swaps
-Best-case performance:   О(n2) comparisons, O(1) swaps
-Average performance:	    О(n2) comparisons, О(n) swaps
*/
export function sort (arr) {
  //i - boundary index between sorted and unsorted parts
  for (let i = 0; i < arr.length - 1; i++)
    //We choose the lowest element of the ansorted array and put in a boundary position
    for (let j = i + 1; j < arr.length; j++)
      if (arr[i] > arr[j]) 
        [arr[i], arr[j]] = [arr[j], arr[i]];

  return arr;
};