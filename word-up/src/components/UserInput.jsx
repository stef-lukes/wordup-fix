import { useState } from "react";
import Letter from "./Letter";
import VowelPicker from "./VowelPicker";
import ConsonantPicker from "./ConsonantPicker";
import Form from "./Form";

const UserInput = () => {
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
  const [answer, setAnswer] = useState("");

  return (
    <>
      <ul className="picked-letters">
        {lettersArr.map((letterObj) => (
          <Letter
            className="letter-item"
            key={letterObj.id}
            letterObj={letterObj}
            setAnswer={setAnswer}
          />
        ))}
      </ul>
      <VowelPicker setLetters={setLetters} />
      <ConsonantPicker setLetters={setLetters} />
      <Form answer={answer} setAnswer={setAnswer} />
    </>
  );
};

export default UserInput;
