const digitsInAGivenNumberAreSame = require('./digitsInAGivenNumberAreSame');

test('testing digitsInAGivenNumberAreSame withArrowfunction', () => {
  expect(digitsInAGivenNumberAreSame.withoutArrow(22)).toBe(true);
});
test('testing digitsInAGivenNumberAreSame withArrow function', () => {
  expect(digitsInAGivenNumberAreSame.withoutArrow(123)).toBe(false);
});
test('testing digitsInAGivenNumberAreSame withArrow function', () => {
  expect(digitsInAGivenNumberAreSame.withoutArrow(-222222)).toBe(true);
});
test('testing digitsInAGivenNumberAreSame withArrow function', () => {
  expect(digitsInAGivenNumberAreSame.withoutArrow(-11101)).toBe(false);
});