import { useState } from "react";
import VowelPicker from "./VowelPicker";
import ConsonantPicker from "./ConsonantPicker";
import UserInput from "./UserInput";

const GameLetters = () => {
  const [lettersArr, setLetters] = useState([
    { id: 1, letter: "" },
    { id: 2, letter: "" },
    { id: 3, letter: "" },
    { id: 4, letter: "" },
    { id: 5, letter: "" },
    { id: 6, letter: "" },
    { id: 7, letter: "" },
    { id: 8, letter: "" },
    { id: 9, letter: "" },
  ]);

  return (
    <>
      <ul className="picked-letters">
        {lettersArr.map((letter) => {
          return (
            <li className="letter-item" key={letter.number}>
              <h2>{letter.letter}</h2>
            </li>
          );
        })}
      </ul>
      <VowelPicker setLetters={setLetters} />
      <ConsonantPicker setLetters={setLetters} />
      <UserInput lettersArr={lettersArr} />
    </>
  );
};

export default GameLetters;
