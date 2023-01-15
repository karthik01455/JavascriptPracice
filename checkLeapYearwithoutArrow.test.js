const checkLeapYear = require('./checkLeapYear');
test('testing checkLeapYear withoutArrow function', () => {
  expect(checkLeapYear.withoutArrow(2000)).toBe(true);
});
test('testing checkLeapYear withoutArrow function', () => {
  expect(checkLeapYear.withoutArrow(2001)).toBe(false);
});
test('testing checkLeapYear withoutArrow function', () => {
  expect(checkLeapYear.withoutArrow(1996)).toBe(true);
});
test('testing checkLeapYear withoutArrow function', () => {
  expect(checkLeapYear.withoutArrow(1900)).toBe(false);
});