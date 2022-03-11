const isPrimeNumber = (num) => {
  if (num < 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
};

const getPrimeNumberSequence = (num) => {
  const sequence = [];
  for (let i = 0; i <= num; i++) {
    if (isPrimeNumber(i)) {
      sequence.push(i);
    }
  }

  return sequence.sort((a, b) => b - a);
};

module.exports = {
  isPrimeNumber,
  getPrimeNumberSequence,
};
