const replaceEveryCharacterWithFollowingCharacter = require('./replaceEveryCharacterWithFollowingCharacter');

test('testing replaceEveryCharacterWithFollowingCharacter withArrowfunction', () => {
  expect(replaceEveryCharacterWithFollowingCharacter.withoutArrow('codeacademy')).toBe('dpefbdbefnz');
});
test('testing replaceEveryCharacterWithFollowingCharacter withArrow function', () => {
  expect(replaceEveryCharacterWithFollowingCharacter.withoutArrow('abcz')).toBe('bcda');
});
test('testing replaceEveryCharacterWithFollowingCharacter withArrow function', () => {
  expect(replaceEveryCharacterWithFollowingCharacter.withoutArrow('lazyinterns')).toBe('mbazjoufsot');
});
test('testing replaceEveryCharacterWithFollowingCharacter withArrow function', () => {
  expect(replaceEveryCharacterWithFollowingCharacter.withoutArrow('z')).toBe('a');
});