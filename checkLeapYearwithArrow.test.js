const checkLeapYear = require('./checkLeapYear');
test('testing checkLeapYear withArrow function', () => {
  expect(checkLeapYear.withArrow(2000)).toBe(true);
});
test('testing checkLeapYear withArrow function', () => {
  expect(checkLeapYear.withArrow(2001)).toBe(false);
});
test('testing checkLeapYear withArrow function', () => {
  expect(checkLeapYear.withArrow(1996)).toBe(true);
});
test('testing checkLeapYear withArrow function', () => {
  expect(checkLeapYear.withArrow(1900)).toBe(false);
});