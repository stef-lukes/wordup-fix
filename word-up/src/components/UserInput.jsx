import { useState } from "react";
import Letter from "./Letter";

const UserInput = ({ lettersArr }) => {
  const [answer, setAnswer] = useState("");

  return (
    <>
      <form className="input-box" action="">
        <input type="text" name="user-input-box" value={answer} />
        <button type="submit">Submit</button>
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
    </>
  );
};

export default UserInput;
