import { expect, } from 'chai';
import _ from 'lodash';

import { sort as bubbleSort, opt_bubblesort as optBubbleSort} from '../Algs/bubbleSort.js';
import { sort as quickSort, opt_qsort as optQuickSort} from '../Algs/quickSort.js';
import { sort as insertionSort} from '../Algs/insertionSort.js';
import { sort as mergeSort} from '../Algs/mergeSort.js';
import { sort as selectionSort} from '../Algs/selectionSort.js';

export function testSortingAlgs() {
  const arr = [11,23,100,6,2,7,9,10,55,1,8,4,5,3,17,56];
  const arrSorted = _.sortBy(arr);

  expect(bubbleSort(arr.slice()))   .to.eql(arrSorted, 'Array, sorted by bubbleSort != sortArray');
  expect(optBubbleSort(arr.slice())).to.eql(arrSorted, 'Array, sorted by optBubbleSort != sortArray');
  expect(quickSort(arr.slice()))    .to.eql(arrSorted, 'Array, sorted by quickSort != sortArray');
  expect(optQuickSort(arr.slice())) .to.eql(arrSorted, 'Array, sorted by optQuickSort!= sortArray');
  expect(insertionSort(arr.slice())).to.eql(arrSorted, 'Array, sorted by insertionSort != sortArray');
  expect(selectionSort(arr.slice())).to.eql(arrSorted, 'Array, sorted by selectionSort != sortArray');
  expect(mergeSort(arr.slice()))    .to.eql(arrSorted, 'Array, sorted by mergeSort != sortArray');
};

testSortingAlgs();