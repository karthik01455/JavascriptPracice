
const longestStringInArray = require('./longestStringInArray');
test('testing longestStringInArray withoutArrow function', () => {
  expect(longestStringInArray.withoutArrow(["we", "love", "code", "academy"])).toBe("academy");
});
test('testing longestStringInArray withoutArrow function', () => {
  expect(longestStringInArray.withoutArrow(["a", "apple", "hi", "i"])).toBe("apple");
});
test('testing longestStringInArray withoutArrow function', () => {
  expect(longestStringInArray.withoutArrow(["cat", "we", "you", "hello"])).toBe("hello");
});
test('testing longestStringInArray withoutArrow function', () => {
  expect(longestStringInArray.withoutArrow(["a", "c", "c", "nice"])).toBe("nice");
});