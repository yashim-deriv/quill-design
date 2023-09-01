import { renderHook } from "@testing-library/react";
import { useFoo } from ".";
// import { useFoo } from "./";
test("returns logged in user", () => {
  const { result } = renderHook(() => useFoo());
  expect(result.current).toEqual(0);
});
