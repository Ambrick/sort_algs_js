import {expect} from 'chai';

import bubbleSort from '../Algs/bubbleSort.js';
import optimizedBubbleSort from '../Algs/optimizedBubbleSort.js';
import quickSort from '../Algs/quickSort.js';
import optimizedQuickSort from '../Algs/optimizedQuickSort.js';
import insertionSort from '../Algs/insertionSort.js';
import mergeSort from '../Algs/mergeSort.js';
import selectionSort from '../Algs/selectionSort.js';

export function testSortingAlgs() {
  const arr = [11, 23, 100, 6, 2, 7, 9, 10, 55, 1, 8, 4, 5, 3, 17, 56];
  const arrSorted = [...arr].sort((a, b ) => a - b);

  expect(bubbleSort(arr.slice()))         .to.eql(arrSorted, 'Array, sorted by bubbleSort != sortArray');
  expect(optimizedBubbleSort(arr.slice())).to.eql(arrSorted, 'Array, sorted by optBubbleSort != sortArray');
  expect(quickSort(arr.slice()))          .to.eql(arrSorted, 'Array, sorted by quickSort != sortArray');
  expect(optimizedQuickSort(arr.slice())) .to.eql(arrSorted, 'Array, sorted by optQuickSort!= sortArray');
  expect(insertionSort(arr.slice()))      .to.eql(arrSorted, 'Array, sorted by insertionSort != sortArray');
  expect(selectionSort(arr.slice()))      .to.eql(arrSorted, 'Array, sorted by selectionSort != sortArray');
  expect(mergeSort(arr.slice()))          .to.eql(arrSorted, 'Array, sorted by mergeSort != sortArray');
};

testSortingAlgs();
