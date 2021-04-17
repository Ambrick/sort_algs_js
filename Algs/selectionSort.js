/*Сортировка выбором
-Worst-case performance:	О(n2) comparisons, О(n) swaps
-Best-case performance:   О(n2) comparisons, O(1) swaps
-Average performance:	    О(n2) comparisons, О(n) swaps
*/
export function sort (arr) {
  //Во внешнем цикле i - индекс границы отсортированного массива
  for (let i = 0; i < arr.length - 1; i++) 
  { 
    //Сравниваем каждый последующий элемент с эл. по индексу i + 1
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
      }
  }
  return arr;
};