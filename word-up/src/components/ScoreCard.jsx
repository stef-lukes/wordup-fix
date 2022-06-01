const checkWord = require("check-if-word");
const words = checkWord("en");

const ScoreCard = ({ answersList }) => {
  words.check("hi");
  const checkedAnswers = answersList.map((a) => {
    const correct = a + "✔️";
    const incorrect = a + "❌";
    if (words.check(a)) {
      return correct;
    } else {
      return incorrect;
    }
  });

  return (
    <>
      <h3 className="score">Score:</h3>
      <ul className="answers">
        {checkedAnswers.map((answerItem) => {
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
