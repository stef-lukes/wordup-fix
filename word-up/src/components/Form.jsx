import { useState } from "react";
import ScoreCard from "./ScoreCard";

const Form = ({ setLetters, answer, setAnswer }) => {
  const [answersList, setAnswersList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setAnswersList((currList) => {
      return [...currList, answer];
    });
    setAnswer("");
    setLetters((currLetters) => {
      return currLetters.map((letter) => {
        return { ...letter, isToggled: false };
      });
    });
  };
  return (
    <>
      <form className="input-box" onSubmit={handleSubmit}>
        <input type="text" name="user-input-box" value={answer} readOnly />
        <button type="submit" className="submit">
          >
        </button>
      </form>
      <ScoreCard answersList={answersList} />
    </>
  );
};

export default Form;
