/*Сортировка вставками
-Worst-case performance:	О(n2) comparisons and swaps
-Best-case performance:	  O(n)  comparisons, O(1) swaps
-Average performance:   	О(n2) comparisons and swaps
*/
export function sort(arr) {
  for (let i = 1; i < arr.length; i++) {
    //j - индекс границы отсортировонной части
    let j = i;
    //Пока элемент взятый из несортированной части < эл. из сортированной части,
    //меняем их местами
    while (arr[j] < arr[j - 1]) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      j--;
    }
  }
  return arr;
};