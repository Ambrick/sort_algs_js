/*Сортировка слиянием
-Worst-case performance:  O(n(log n))
-Best-case performance:   О(n2)
-Average performance:	    О(n2)
*/
export function sort(arr) {
  //Проверка на размер полученного массива
  if (arr.length < 2) return arr;
  //Находим середину массива
  const middle = Math.floor(arr.length / 2);
  //Объединяем отсортированные куски(половинки от оригинальной строки) для возврата
  return mergeArrays(sort(arr.slice(0, middle)), arr.slice(middle));
};

function mergeArrays(l_arr, r_arr){
  const mergedArr = [];
  //Сравниваем первые элементы массивов, наименьший
  //заносим в конечный массив
  while (l_arr.length && r_arr.length) {
    mergedArr.push(l_arr[0] > r_arr[0] ? r_arr.shift() : l_arr.shift());
  }
  //Возвращаем отсортированный массив, присоедияния возможные остатки 
  //от левого и правого массивов
  return mergedArr.concat(l_arr, r_arr);
  /*
  //Сравниваем первые элементы левого и правого массивов
  //и отщипляем меньший из них в конечный массив
  while (l_arr.length && r_arr.length) {
    if (l_arr[0] > r_arr[0]) {
      mergedArr.push(r_arr.shift());
    } else {
      mergedArr.push(l_arr.shift());
    }
    //mergedArr.push(l_arr[0] > r_arr[0] ? r_arr.shift() : l_arr.shift());
  }
  //После сравнений, в одном из массивов могут оставаться
  //элементы
  while (l_arr.length) {
    mergedArr.push(l_arr.shift());
  }
  while (r_arr.length) {
    mergedArr.push(r_arr.shift());
  }
  return mergedArr;
  */
};