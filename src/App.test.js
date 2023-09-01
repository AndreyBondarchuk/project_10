import {isValid} from './App';

describe('isValid Function', () => {
  it('should return false for too short input', () => {
    expect(isValid('', 5)).toBe(false);
  });

  it('should return false for too long input', () => {
    expect(isValid('Ab1$TooLongInput', 10)).toBe(false);
  });

  it('should return true for matching input length with all requirements', () => {
    expect(isValid('Ab1$', 4)).toBe(true);
  });

  it('should return false for missing uppercase character', () => {
    expect(isValid('ab1$', 5)).toBe(false);
  });

  it('should return false for missing lowercase character', () => {
    expect(isValid('AB1$', 5)).toBe(false);
  });

  it('should return false for missing special character', () => {
    expect(isValid('Ab1', 5)).toBe(false);
  });

  it('should return false for missing digit', () => {
    expect(isValid('Ab$', 5)).toBe(false);
  });

  it('should return false for excess whitespace at the beginning', () => {
    expect(isValid('  Ab1$', 7)).toBe(false);
  });

  it('should return false for excess whitespace at the end', () => {
    expect(isValid('Ab1$  ', 7)).toBe(false);
  });

  it('should return false for excess whitespace in the middle', () => {
    expect(isValid('Ab  1$', 7)).toBe(false);
  });

  it('should return true for valid input', () => {
    expect(isValid('Ab1$', 5)).toBe(true);
  });
});