import { useState } from "react";

const Letter = ({ letterObj, setAnswer }) => {
  const letterId = letterObj.id;
  let letter = letterObj.letter;
  const [isToggled, setIsToggled] = useState(false);

  const onToggle = () => {
    setIsToggled(!isToggled);
    setAnswer((currAnswer) => {
      if (isToggled === false) {
        currAnswer += letter;
      } else if (isToggled === true && currAnswer.includes(letter)) {
        return currAnswer.replace(letter, "");
      }
      return currAnswer;
    });
  };

  return (
    <>
      <li className="letter-item" key={letterId}>
        <label className="toggle-letter">
          <input type="checkbox" checked={isToggled} onChange={onToggle} />
          <span>
            <h2>{letter}</h2>
          </span>
        </label>
      </li>
    </>
  );
};

export default Letter;
