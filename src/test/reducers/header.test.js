import headers from "../fixtures/header";
import headerReducer from "../../reducers/header";
import header from "../../reducers/header";

test("should set default state", () => {
  const state = headerReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    title: "Boiler Plate rendered via header",
    subtitle: ""
  });
});
test("should set title", () =>
  expect(
    headerReducer(headers, { type: "SET_TITLE", title: "Test Title" })
  ).toEqual({ title: "Test Title", subtitle: "" }));

test("should set subtitle", () =>
  expect(
    headerReducer(headers, { type: "SET_SUBTITLE", subtitle: "Test Subtitle" })
  ).toEqual({
    title: "Boiler Plate rendered via header",
    subtitle: "Test Subtitle"
  }));

test("should set header", () =>
  expect(
    headerReducer(headers, {
      type: "SET_HEADER",
      title: "Test Title",
      subtitle: "Test Subtitle"
    })
  ).toEqual({ title: "Test Title", subtitle: "Test Subtitle" }));
