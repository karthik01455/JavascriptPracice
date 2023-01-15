const countVowels = require('./countVowels');
test('testing countVowels withArrowfunction', () => {
  expect(countVowels.withArrow('aeiou')).toBe(5);
});
test('testing countVowels withArrow function', () => {
  expect(countVowels.withArrow('abcz')).toBe(1);
});
test('testing countVowels withArrow function', () => {
  expect(countVowels.withArrow('helloo')).toBe(3);
});
test('testing countVowels withArrow function', () => {
  expect(countVowels.withArrow('codeacademy')).toBe(5);
});