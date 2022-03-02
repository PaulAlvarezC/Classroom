const hello = requiere('./hello');

test('outputs the correct string', () => {
  expect(hello()).toBe('Hello Classroom');
});
