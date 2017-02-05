'use strict';

const search = require('../../src/search/lienar-seach');
const expect = require('expect');

describe('[Chapter 2] Linear search', () => {
  it('should return null when input is empty', () => {
    expect(search([], 0)).toEqual(null);
  });
  it('should return position 0', () => {
    expect(search([1], 1)).toEqual(0);
  });
  it('should return i = 1 when input is [31, 41, 59, 26, 41, 58] and value = 41', () => {
    expect(search([31, 41, 59, 26, 41, 58], 41)).toEqual(1);
  });
  it('should return null when input is [31, 41, 59, 26, 41, 58] and value = 88, due to value is not in the array', () => {
    expect(search([31, 41, 59, 26, 41, 58], 88)).toEqual(null);
  });
});