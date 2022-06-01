const { useState } = require("react");

const ScoreCard = ({ answer }) => {
  const [answersList, setAnswersList] = useState([]);

  setAnswersList((currList) => {
    return [...currList, answer];
  });

  return (
    <>
      <h3>Score:</h3>
      <ul className="answers">
        {answersList.map((answerItem) => {
          return (
            <li className="answer-item" key={answerItem}>
              <p>{answerItem}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ScoreCard;

// const G = require("generatorics");

// const checkWord = require("check-if-word"),
//   words = checkWord("en");

//   const gameLettersArr = [];
//   lettersArr.map((letterObj) => {
//     return gameLettersArr.push(letterObj.letter);
//   });

//   const joinedLetters = gameLettersArr.join("");

//   const strArr = [];
//   for (var perm of G.permutationCombination(joinedLetters)) {
//     strArr.push(perm.join(""));
//   }

// const validWords = words.getValidWords(strArr);
