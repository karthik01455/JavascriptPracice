const changeCapitalization = require('./changeCapitalization');
test('testing changeCapitalization withoutArrowfunction', () => {
    expect(changeCapitalization.withoutArrow('MeRRy hAD a LITTle lAMp')).toBe('mErrY Had A littLE LamP');
  });
  test('testing changeCapitalization withoutArrow function', () => {
    expect(changeCapitalization.withoutArrow('HI hello')).toBe('hi HELLO');
  });
  test('testing changeCapitalization withoutArrow function', () => {
    expect(changeCapitalization.withoutArrow('hello')).toBe('HELLO');
  });
  test('testing changeCapitalization withoutArrow function', () => {
    expect(changeCapitalization.withoutArrow('codeacademy')).toBe('CODEACADEMY');
  });