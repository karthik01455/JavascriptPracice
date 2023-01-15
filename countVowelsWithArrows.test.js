const countVowels = require('./countVowels');
test('testing countVowels withArrowfunction', () => {
  expect(countVowels.withArrow('aeiou')).toBe(5);
});
test('testing countVowels withArrow function', () => {
  expect(countVowels.withArrow('abcz')).toBe(1);
});
test('testing countVowels withArrow function', () => {
  expect(countVowels.withArrow('hello')).toBe(2);
});
test('testing countVowels withArrow function', () => {
  expect(countVowels.withArrow('codeacademy')).toBe(5);
});