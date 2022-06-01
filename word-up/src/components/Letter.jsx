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
        console.log("inside first if");
      } else if (isToggled === true && currAnswer.includes(letter)) {
        return currAnswer.replace(letter, "");
      }
      return currAnswer;
    });
  };

  return (
    <>
      <li className="available-letter" key={letterId}>
        <label className="toggle-letter">
          <input type="checkbox" checked={isToggled} onChange={onToggle} />
          <span>{letter}</span>
        </label>
      </li>
    </>
  );
};

export default Letter;
