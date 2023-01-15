const stringEndsWithScript = require('./stringEndsWithScript');
test('testing stringEndsWithScript withArrow function', () => {
  expect(stringEndsWithScript.withArrow("JavaScript")).toBe(true);
});
test('testing stringEndsWithScript withArrow function', () => {
  expect(stringEndsWithScript.withArrow("hellopt")).toBe(false);
});
test('testing stringEndsWithScript withArrow function', () => {
  expect(stringEndsWithScript.withArrow("JavanewScript")).toBe(true);
});
test('testing stringEndsWithScript withArrow function', () => {
  expect(stringEndsWithScript.withArrow("Javascript")).toBe(false);
});