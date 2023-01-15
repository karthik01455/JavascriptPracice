const concatTwoStringsExceptTheirFirstCharacter = require('./concatenateTwoStringsExceptTheirFirstCharacter');
test('testing concatTwoStringsExceptTheirFirstCharacter withoutArrow function', () => {
  expect(concatTwoStringsExceptTheirFirstCharacter.withoutArrow(["code", "academy"])).toBe("odecademy");
});
test('testing concatTwoStringsExceptTheirFirstCharacter withoutArrow function', () => {
  expect(concatTwoStringsExceptTheirFirstCharacter.withoutArrow(["hi", "hello"])).toBe("iello");
});
test('testing concatTwoStringsExceptTheirFirstCharacter withoutArrow function', () => {
  expect(concatTwoStringsExceptTheirFirstCharacter.withoutArrow(["code", "good"])).toBe("odeood");
});
test('testing concatTwoStringsExceptTheirFirstCharacter withoutArrow function', () => {
  expect(concatTwoStringsExceptTheirFirstCharacter.withoutArrow(["problem", "solving"])).toBe("roblemolving");
});