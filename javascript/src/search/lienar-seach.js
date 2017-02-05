'use strict';

/**
 * [Chapter 2]
 *
 * Linear search
 *
 * @param {Array} elements
 * @param {int} value
 * @return {int}|null position i, where elements[i] = value
 */
module.exports = (elements = [], value) => {
  return search(elements, value);
};

/**
 * (2.1-3)
 *
 * e.g. elements = [26, 31, 41, 41, 58, 59]
 *
 * @param {Array} elements
 * @param {int} value
 * @return {int}|null position i, where elements[i] = value
 * */
function search(elements, value) {
  for (let j = 0; j < elements.length; j++) {
    if (elements[j] === value) {
      return j;
    }
  }

  return null;
}
