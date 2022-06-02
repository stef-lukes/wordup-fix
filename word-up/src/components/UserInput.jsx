import { useState } from "react";
import Letter from "./Letter";
import VowelPicker from "./VowelPicker";
import ConsonantPicker from "./ConsonantPicker";
import Form from "./Form";

const UserInput = () => {
  const [lettersArr, setLetters] = useState([
    { id: 1, letter: "", isToggled: false },
    { id: 2, letter: "", isToggled: false },
    { id: 3, letter: "", isToggled: false },
    { id: 4, letter: "", isToggled: false },
    { id: 5, letter: "", isToggled: false },
    { id: 6, letter: "", isToggled: false },
    { id: 7, letter: "", isToggled: false },
    { id: 8, letter: "", isToggled: false },
    { id: 9, letter: "", isToggled: false },
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
      <Form setLetters={setLetters} answer={answer} setAnswer={setAnswer} />
    </>
  );
};

export default UserInput;
