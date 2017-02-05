'use strict';

/**
 * [Chapter 2]
 *
 * Insert sort strategy
 *
 * @param {Array} elements
 * @param {String} strategy
 * @return {Array}
 */
module.exports = (elements = [], strategy = 'no-decreasing') => {
  switch (strategy) {
    case 'no-increasing': return noIncreasing(elements);
    default: return noDecreasing(elements);
  }
};

/**
 * (2.1-1)
 *
 * No decreasing sor strategy, e.g. [26, 31, 41, 41, 58, 59]
 *
 * @param {Array} elements
 * @return {Array} sorted
 */
function noDecreasing(elements) {
  for (let j = 1; j < elements.length; j++) {
    let key = elements[j];
    let i = j - 1;
    while (i >= 0 && elements[i] > key) {
      elements[i + 1] = elements[i];
      --i;
    }
    elements[i + 1] = key;
  }

  return elements;
}

/**
 * (2.1-2)
 *
 * No increasing sor strategy, e.g. [59, 58, 41, 41, 31, 26]
 *
 * @param {Array} elements
 * @return {Array} sorted
 */
function noIncreasing(elements) {
  for (let j = 1; j < elements.length; j++) {
    let key = elements[j];
    let i = j - 1;
    while (i >= 0 && elements[i] < key) {
      elements[i + 1] = elements[i];
      --i;
    }
    elements[i + 1] = key;
  }

  return elements;
}