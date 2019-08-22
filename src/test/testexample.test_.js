const add = (a, b) => a + b;
const generateGreetings = name => `Hello ${name}`;

test("should add two numbers", () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test("test greetings", () => {
  const greeting = generateGreetings("saurabh");
  expect(greeting).toBe("Hello saurabh");
});
