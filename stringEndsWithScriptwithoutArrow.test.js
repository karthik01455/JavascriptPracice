const stringEndsWithScript = require('./stringEndsWithScript');
test('testing stringEndsWithScript withoutArrow function', () => {
  expect(stringEndsWithScript.withoutArrow("JavaScript")).toBe(true);
});
test('testing stringEndsWithScript withoutArrow function', () => {
  expect(stringEndsWithScript.withoutArrow("hellopt")).toBe(false);
});
test('testing stringEndsWithScript withoutArrow function', () => {
  expect(stringEndsWithScript.withoutArrow("JavanewScript")).toBe(true);
});
test('testing stringEndsWithScript withoutArrow function', () => {
  expect(stringEndsWithScript.withoutArrow("Javascript")).toBe(false);
});