const largestEvenNumber = require('./largestEvenNumber');

test('testing largestEvenNumber withArrow function', () => {
  expect(largestEvenNumber.withoutArrow([-3,2,8,4])).toBe(8);
});
test('testing largestEvenNumber withArrow function', () => {
  expect(largestEvenNumber.withoutArrow([-4,-6,3,-2])).toBe(-2);
});
test('testing largestEvenNumber withArrow function', () => {
  expect(largestEvenNumber.withoutArrow([-1,2,124,4])).toBe(124);
});
test('testing largestEvenNumber withArrow function', () => {
  expect(largestEvenNumber.withoutArrow([-13,212,81,4])).toBe(212);
});