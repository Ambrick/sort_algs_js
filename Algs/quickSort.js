import _ from 'lodash';

//Сложность в среднем: O(n*log(n))
//Худший вариант: O(n^2)
export function sort(arr) {
  //Проверка размера переданного массива, если < 2, то возврщаем его
  if (arr.length < 2) return arr;

  const pivot = arr[0], left = [], right = [];
  //Распределяем элементы массива, в левый, если эл. меньше первого эл.
  //в правый, если элемент больше первого
  for (let i = 1; i < arr.length; i++) {
    pivot > arr[i] ? left.push(arr[i]) : right.push(arr[i]);
  }
  //Собираем массив, полученный после одной итерации
  //Рекурсивно проводим сортировку над полученными половинками
  return sort(left).concat(pivot, sort(right));
};

//Оптимизированная быстрая сортировка.
//Ускорение происходит, за счет случайного
//выбора основы для деления массива
export function opt_qsort(arr) {
  if (arr.length < 2) return arr;
  //Выбираем случайный элемент в массиве
  const indexOfPivot = Math.floor(_.random(arr.length - 1));
  const pivot = arr[indexOfPivot], left = [], right = [];
  //Помещаем его на первое место в массиве
  arr.splice(indexOfPivot, 1);
  arr.unshift(pivot);

  for (let i = 1; i < arr.length; i++) {
    pivot > arr[i] ? left.push(arr[i]) : right.push(arr[i]);
  }
  
  return opt_qsort(left).concat(pivot, opt_qsort(right));
};