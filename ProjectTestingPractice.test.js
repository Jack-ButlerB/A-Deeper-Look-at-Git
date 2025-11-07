import { describe, expect, test } from "@jest/globals";
import { capitalize, reverseString } from "./ProjectTestingPractice";

describe("capitalize each word", () => {
  test("turn jack into Jack", () => {
    expect(capitalize("jack")).toBe("Jack");
  });
  test("what happends if there are 2 words", () => {
    expect(capitalize("jack butler")).toBe("Jack butler");
  });
});

describe("reverse given string", () => {
  test("jack should equal kcaj", () => {
    expect(reverseString("jack")).toBe("kcaj");
  });
  test("Alphabet should be spelled backwards", () => {
    expect(reverseString("ABCDEFGHIJKLMNOPQRSTUVWXYZ")).toBe(
      "ZYXWVUTSRQPONMLKJIHGFEDCBA"
    );
  });
});
