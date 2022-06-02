import { useState } from "react";

const Letter = ({ letterObj, setAnswer }) => {
  const letterId = letterObj.id;
  let letter = letterObj.letter;
  const [isToggled, setIsToggled] = useState(letterObj.isToggled);

  const onToggle = (id) => {
    setIsToggled((letterObj.isToggled = !isToggled));
    console.log(letterObj);
    setAnswer((currAnswer) => {
      if (letterId === id && letterObj.isToggled === true) {
        currAnswer += letter;
      } else if (
        letterId === id &&
        letterObj.isToggled === false &&
        currAnswer.includes(letter)
      ) {
        return currAnswer.replace(letter, "");
      }
      return currAnswer;
    });
  };

  return (
    <>
      <li className="letter-item" key={letterId}>
        <label className="toggle-letter">
          <input
            type="checkbox"
            checked={letterObj.isToggled}
            onChange={() => {
              onToggle(letterId);
            }}
          />
          <span>
            <h2>{letter}</h2>
          </span>
        </label>
      </li>
    </>
  );
};

export default Letter;
