const largestEvenNumber = require('./largestEvenNumber');
test('testing largestEvenNumber withArrow function', () => {
  expect(largestEvenNumber.withArrow([-3,2,8,4])).toBe(8);
});
test('testing largestEvenNumber withArrow function', () => {
  expect(largestEvenNumber.withArrow([-4,-6,33,-2])).toBe(-2);
});git 
test('testing largestEvenNumber withArrow function', () => {
  expect(largestEvenNumber.withArrow([-1,2,124,4])).toBe(124);
});
test('testing largestEvenNumber withArrow function', () => {
  expect(largestEvenNumber.withArrow([-13,212,811,4])).toBe(212);
});