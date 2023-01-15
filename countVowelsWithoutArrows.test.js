const countVowels = require('./countVowels');

test('testing countVowels withArrowfunction', () => {
  expect(countVowels.withoutArrow('aeiou')).toBe(5);
});
test('testing countVowels withArrow function', () => {
  expect(countVowels.withoutArrow('abcz')).toBe(1);
});
test('testing countVowels withArrow function', () => {
  expect(countVowels.withoutArrow('hello')).toBe(2);
});
test('testing countVowels withArrow function', () => {
  expect(countVowels.withoutArrow('codeacademy')).toBe(5);
});