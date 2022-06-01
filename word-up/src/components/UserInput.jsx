import { useState } from "react";
import Letter from "./Letter";
// import ScoreCard from "./ScoreCard";

const UserInput = ({ lettersArr }) => {
  const [answer, setAnswer] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form className="input-box" onSubmit={handleSubmit}>
        <input
          type="text"
          name="user-input-box"
          value={answer}
          onChange={(event) => {
            setAnswer(event.target.value);
          }}
        />
        <button type="submit" className="submit">
          >
        </button>
      </form>
      <ul className="available-letters">
        {lettersArr.map((letterObj) => (
          <Letter
            key={letterObj.id}
            letterObj={letterObj}
            setAnswer={setAnswer}
          />
        ))}
      </ul>
      {/* <ScoreCard answer={answer} /> */}
    </>
  );
};

export default UserInput;
