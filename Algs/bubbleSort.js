//Сортировка пузырьковым методом
//Сложность: O(n^2)
export function sort (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        /*
        Для обмена значений двух переменных можно
        также использовать:
        1. Замена переменных местами через оператор "XOR"
        *таблица истинности для "XOR"
        ┌─────┬─────┬───────┐
        │ a   │ b   │ a ^ b │
        ├─────┼─────┼───────┤
        │ 0   │ 0   │   0   │
        │ 1   │ 1   │   0   │
        │ 0   │ 1   │   1   │
        │ 1   │ 0   │   1   │
        └─────┴─────┴───────┘
        arr[j]= arr[j] ^ arr[j+1];
        arr[j+1] = arr[j+1] ^ arr[j];
        arr[j]= arr[j] ^ arr[j+1];
        2. Деструктирующее присвоение (ES6)
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        */
      }
    }
  }
  return arr;
};

//Оптимизированный пузырьковый метод с прерыванием
export function opt_bubblesort(arr) {
  let swapped;
  for (let i = 0; i < arr.length - 1; i++) {
    swapped = false;
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (swapped == false) break;
  }
  return arr;
};