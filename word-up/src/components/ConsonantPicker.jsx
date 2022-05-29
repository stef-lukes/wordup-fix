const ConsonantPicker = ({ setLetters }) => {
  function addConsonant() {
    const consonants = "BCDFGHJKLMNPQRSTVWXYZ";
    let newConsonant = "";

    const consonantsLength = consonants.length;
    for (let i = 1; i < 2; i++) {
      newConsonant += consonants.charAt(
        Math.floor(Math.random() * consonantsLength)
      );
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
        newLetter.letter = newConsonant;
      }
      return [...currLetters];
    });
  }

  return (
    <>
      <button className="letter-pickers" onClick={addConsonant}>
        Consonant
      </button>
    </>
  );
};

export default ConsonantPicker;
