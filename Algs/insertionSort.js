/*Сортировка вставками
-Worst-case performance:	О(n2) comparisons and swaps
-Best-case performance:	  O(n)  comparisons, O(1) swaps
-Average performance:   	О(n2) comparisons and swaps
*/
export function sort(arr) {
  //Во внешнем цикле i - индекс границы отсортированного массива
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    //Пока эл. из несортированной части < эл. из сортированной части
    while (arr[j] < arr[j - 1]) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      j--;
    }
  }
  return arr;
};