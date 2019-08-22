import { setTitle, setSubtitle, setHeader } from "../../actions/header";

// default value test
test("should set up Title to default", () => {
  const action = setTitle();
  expect(action).toEqual({
    type: "SET_TITLE",
    title: ""
  });
});

test("should set up subtitle  to default", () => {
  const action = setSubtitle();
  expect(action).toEqual({
    type: "SET_SUBTITLE",
    subtitle: ""
  });
});
test("should set up header  to default", () => {
  const action = setHeader();
  expect(action).toEqual({
    type: "SET_HEADER",
    title: "",
    subtitle: ""
  });
});
// Seting up values
test("should set up Title", () => {
  const action = setTitle("Test Title");
  expect(action).toEqual({
    type: "SET_TITLE",
    title: "Test Title"
  });
});

test("should set up subtitle", () => {
  const action = setSubtitle("Test Subtitle");
  expect(action).toEqual({
    type: "SET_SUBTITLE",
    subtitle: "Test Subtitle"
  });
});
test("should set up header", () => {
  const action = setHeader({ title: "Test Title", subtitle: "Test Subtitle" });
  expect(action).toEqual({
    type: "SET_HEADER",
    title: "Test Title",
    subtitle: "Test Subtitle"
  });
});
test("should not setup title", () => {});
