'use strict';

const sort = require('../../src/sort/insertion-sort');
const expect = require('expect');

describe('Sort array of integers using insertion sort strategy', () => {
  it('should return empty array if the input is empty', () => {
    expect(sort([])).toEqual([]);
  });
  it('should return an array of one element if the input has only one element', () => {
    expect(sort([1])).toEqual([1]);
  });
  it('should sort using a no-decreasing strategy by default', () => {
    expect(sort([31, 41, 59, 26, 41, 58])).toEqual([26, 31, 41, 41, 58, 59]);
  });
  it('should sort using a no-increasing strategy by default', () => {
    expect(sort([31, 41, 59, 26, 41, 58], 'no-increasing')).toEqual([59, 58, 41, 41, 31, 26]);
  });
  it('should sort using a no-increasing strategy by default', () => {
    expect(sort([-31, 41, 59, 26, -41, 58], 'no-increasing')).toEqual([59, 58, 41, 26, -31, -41]);
  });
});