import React from "react";
import { shallow } from "enzyme";
import { findByAttr, checkProps } from "../test/testUtils";

import GuessedWords from "./GuessedWords";

const defaultProps = {
  guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }],
};

const setup = (props = {}) => {
  const setupProps = { defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

test("Throws no warning with expected props", () => {
  checkProps(GuessedWords, defaultProps);
});

describe("If there are no words guessed...", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });

  test("Renders without error", () => {
    const component = findByAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(0);
  });

  test("Renders instructions to guess a word", () => {
    const component = findByAttr(wrapper, "component-instructions");
    expect(component.length).not.toBe(0);
  });
});

describe("If some words have been guessed...", () => {
  let wrapper;
  const guessedWords = [
    { guessedWord: "train", letterMatchCount: 3 },
    { guessedWord: "agile", letterMatchCount: 1 },
    { guessedWord: "party", letterMatchCount: 5 },
  ];
  beforeEach(() => {
    wrapper = setup({ guessedWords: guessedWords });
  });

  test("Renders without error", () => {
    const component = findByAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });

  test("Renders guessed word section", () => {
    const component = findByAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });

  test("Renders correct number of guessed words", () => {
    const component = findByAttr(wrapper, "component-single-word");
    expect(component.length).toBe(guessedWords.length);
  });
});
