const { isPrimeNumber, getPrimeNumberSequence } = require('../../utils/number');

describe('number tests', () => {
  it('isPrimeNumber', () => {
    const result = isPrimeNumber(2);
    expect(result).toBe(true);
  });

  it('is not prime number', () => {
    const result = isPrimeNumber(4);
    expect(result).toBe(false);
  });

  it('getPrimeNumberSequence - 1', () => {
    const result = getPrimeNumberSequence(1);
    expect(result).toEqual([]);
  });

  it('getPrimeNumberSequence - 4', () => {
    const result = getPrimeNumberSequence(4);
    expect(result).toEqual([3, 2]);
  });

  it('getPrimeNumberSequence - 5', () => {
    const result = getPrimeNumberSequence(5);
    expect(result).toEqual([5, 3, 2]);
  });

  it('getPrimeNumberSequence - 7', () => {
    const result = getPrimeNumberSequence(7);
    expect(result).toEqual([7, 5, 3, 2]);
  });

  it('getPrimeNumberSequence - 15', () => {
    const result = getPrimeNumberSequence(15);
    expect(result).toEqual([13, 11, 7, 5, 3, 2]);
  });
});
