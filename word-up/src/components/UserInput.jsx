import { useState } from "react";

const UserInput = ({ lettersArr }) => {
  const availableLetters = [];
  lettersArr.map((letter) => {
    availableLetters.push(letter.letter);
  });
  const [guessStr, setGuessStr] = useState("");

  return (
    <>
      <form className="input-box" action="">
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default UserInput;
