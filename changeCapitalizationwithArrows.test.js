const changeCapitalization = require('./changeCapitalization');
test('testing changeCapitalization withArrowfunction', () => {
  expect(changeCapitalization.withArrow('MeRRy hAD a LITTle lAMp')).toBe('mErrY Had A littLE LamP');
});
test('testing changeCapitalization withArrow function', () => {
  expect(changeCapitalization.withArrow('HI hello')).toBe('hi HELLO');
});
test('testing changeCapitalization withArrow function', () => {
  expect(changeCapitalization.withArrow('hello')).toBe('HELLO');
});
test('testing changeCapitalization withArrow function', () => {
  expect(changeCapitalization.withArrow('codeacademy')).toBe('CODEACADEMY');
});