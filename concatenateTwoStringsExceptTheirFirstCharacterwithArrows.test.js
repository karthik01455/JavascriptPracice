const concatTwoStringsExceptTheirFirstCharacter = require('./concatenateTwoStringsExceptTheirFirstCharacter');
test('testing concatTwoStringsExceptTheirFirstCharacter withArrow function', () => {
  expect(concatTwoStringsExceptTheirFirstCharacter.withArrow(["code", "academy"])).toBe("odecademy");
});
test('testing concatTwoStringsExceptTheirFirstCharacter withArrow function', () => {
  expect(concatTwoStringsExceptTheirFirstCharacter.withArrow(["hi", "hello"])).toBe("iello");
});
test('testing concatTwoStringsExceptTheirFirstCharacter withArrow function', () => {
  expect(concatTwoStringsExceptTheirFirstCharacter.withArrow(["code", "good"])).toBe("odeood");
});
test('testing concatTwoStringsExceptTheirFirstCharacter withArrow function', () => {
  expect(concatTwoStringsExceptTheirFirstCharacter.withArrow(["problem", "solving"])).toBe("roblemolving");
});