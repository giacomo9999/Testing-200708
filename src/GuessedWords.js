import React from "react";
import PropTypes from "prop-types";

const GuessedWords = (props) => {
  const guessedWordList = props.guessedWords.map((word, index) => (
    <tr key={`data_${index}`} data-test="component-single-word">
      <td>{word.guessedWord}</td>
      <td>{word.letterMatchCount}</td>
    </tr>
  ));

  return props.guessedWords.length === 0 ? (
    <div>
      <h1 data-test="component-instructions">Guess A Word</h1>
    </div>
  ) : (
    <div data-test="component-guessed-words">
      <table>
        <thead>
          <tr>
            <th>Word</th>
            <th>Matching Letters</th>
          </tr>
        </thead>
        <tbody data-test="comp-word-list">{guessedWordList}</tbody>
      </table>
    </div>
  );
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ),
};

export default GuessedWords;
