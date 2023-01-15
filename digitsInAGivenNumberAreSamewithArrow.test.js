const digitsInAGivenNumberAreSame = require('./digitsInAGivenNumberAreSame');

test('testing digitsInAGivenNumberAreSame withArrowfunction', () => {
  expect(digitsInAGivenNumberAreSame.withArrow(22)).toBe(true);
});
test('testing digitsInAGivenNumberAreSame withArrow function', () => {
  expect(digitsInAGivenNumberAreSame.withArrow(123)).toBe(false);
});
test('testing digitsInAGivenNumberAreSame withArrow function', () => {
  expect(digitsInAGivenNumberAreSame.withArrow(-222222)).toBe(true);
});
test('testing digitsInAGivenNumberAreSame withArrow function', () => {
  expect(digitsInAGivenNumberAreSame.withArrow(-11110)).toBe(false);
});