const G = require("generatorics");
const checkWord = require("check-if-word"),
  words = checkWord("en");

const ScoreCard = ({ lettersArr }) => {
    const gameLettersArr = [];
    lettersArr.map((letterObj) => {
      return gameLettersArr.push(letterObj.letter);
    });

    const joinedLetters = gameLettersArr.join("");

    const strArr = [];
    for (var perm of G.permutationCombination(joinedLetters)) {
      strArr.push(perm.join(""));
    }

    const validWords = words.getValidWords(strArr);
    
    return (
        
    )
};
