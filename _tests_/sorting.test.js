import { arraysEqual } from './ArrayComparison.js'
import { expect} from 'chai';
import _ from 'lodash';

import { sort as bubbleSort, opt_bubblesort as optBubbleSort} from '../Algs/bubbleSort.js';
import { sort as quickSort, opt_qsort as optQuickSort} from '../Algs/quickSort.js';
import { sort as insertionSort} from '../Algs/insertionSort.js';
import { sort as mergeSort} from '../Algs/mergeSort.js';
import { sort as selectionSort} from '../Algs/selectionSort.js';

export function testSortingAlgs() {
  const arr = [11,23,100,6,2,7,9,10,55,1,8,4,5,3,17,56];
  const arrSorted = _.sortBy(arr);
  
  expect(arraysEqual(bubbleSort(arr), arrSorted)).be.true;
  expect(arraysEqual(optBubbleSort(arr), arrSorted)).be.true;
  expect(arraysEqual(quickSort(arr), arrSorted)).be.true;
  expect(arraysEqual(optQuickSort(arr), arrSorted)).be.true;
  expect(arraysEqual(insertionSort(arr), arrSorted)).be.true;
  expect(arraysEqual(mergeSort(arr), arrSorted)).be.true;
  expect(arraysEqual(selectionSort(arr), arrSorted)).be.true;
};

testSortingAlgs();