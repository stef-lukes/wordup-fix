const VowelPicker = ({ setLetters }) => {
  function addVowel() {
    const vowels = "AEIOU";
    let newVowel = "";

    const vowelsLength = vowels.length;
    for (let i = 1; i < 2; i++) {
      newVowel += vowels.charAt(Math.floor(Math.random() * vowelsLength));
    }
    setLetters((currLetters) => {
      let currFilled = [];

      for (let i = 0; i < 9; i++) {
        if (currLetters[i].letter !== "") {
          currFilled.push(currLetters[i]);
        }
      }

      let currLength = currFilled.length;
      let newLetter = currLetters[currLength];

      if (currLength >= 9) {
        console.log("hit capacity");
      } else {
        newLetter.letter = newVowel;
      }
      return [...currLetters];
    });
  }

  return (
    <>
      <button className="letter-pickers" onClick={addVowel}>
        Vowel
      </button>
    </>
  );
};

export default VowelPicker;

// const consonants = "BCDFGHJKLMNPQRSTVWXYZ";
//   function randomConsonant() {
//     let consonResult = " ";
//     const consonantsLength = consonants.length;
//     for (let i = 1; i < 2; i++) {
//       result += consonants.charAt(Math.floor(Math.random() * consonantsLength));
//     }

//     return consonResult;
//   }
