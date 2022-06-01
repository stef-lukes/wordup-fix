import { useState } from "react";
import ScoreCard from "./ScoreCard";

const Form = ({ answer, setAnswer }) => {
  const [answersList, setAnswersList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setAnswersList((currList) => {
      return [...currList, answer];
    });
    setAnswer("");
  };
  return (
    <>
      <form className="input-box" onSubmit={handleSubmit}>
        <input
          type="text"
          name="user-input-box"
          value={answer}
          //   onChange={(event) => {
          //     setAnswer(event.target.value);
          //   }}
        />
        <button type="submit" className="submit">
          >
        </button>
      </form>
      <ScoreCard answersList={answersList} />
    </>
  );
};

export default Form;
