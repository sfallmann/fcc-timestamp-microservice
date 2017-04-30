const expect = require('expect');
const helper = require('./helper');

describe('helper.isNumber', () => {
  it('should return true if string coerces to a number', () => {
    expect(helper.isNumber('123')).toBe(true);
  });
  it('should return false if string does not coerce to a number', () => {
    expect(helper.isNumber('foo')).toBe(false);
  });
});

describe('helper.parseStr', () => {
  it('should remove commas and extra spaces', () => {
    expect(helper.parseStr('Nov  , 3 ,, 1972')).toBe('Nov 3 1972');
  });
});

describe('helper.timeInMs', () => {
  it('should return the time in ms for a valid unix timestamp string', () => {
    expect(helper.timeInMs('1493554565.639')).toBe(1493554565639);
  });
  it('should return the time in ms for a valid natural date string', () => {
    expect(helper.timeInMs('April 30 2017')).toBe(1493524800000);
  });
  it('should return null for a invalid number string', () => {
    expect(helper.timeInMs(149352480000099999999999)).toBe(null);
  });
  it('should return null for an invalid string', () => {
    expect(helper.timeInMs('something not right')).toBe(null);
  });
});
