const replaceEveryCharacterWithFollowingCharacter = require('./replaceEveryCharacterWithFollowingCharacter');

test('testing replaceEveryCharacterWithFollowingCharacter withArrowfunction', () => {
  expect(replaceEveryCharacterWithFollowingCharacter.withArrow('codeacademy')).toBe('dpefbdbefnz');
});
test('testing replaceEveryCharacterWithFollowingCharacter withArrow function', () => {
  expect(replaceEveryCharacterWithFollowingCharacter.withArrow('abcz')).toBe('bcda');
});
test('testing replaceEveryCharacterWithFollowingCharacter withArrow function', () => {
  expect(replaceEveryCharacterWithFollowingCharacter.withArrow('lazyinterns')).toBe('mbazjoufsot');
});
test('testing replaceEveryCharacterWithFollowingCharacter withArrow function', () => {
  expect(replaceEveryCharacterWithFollowingCharacter.withArrow('z')).toBe('a');
});