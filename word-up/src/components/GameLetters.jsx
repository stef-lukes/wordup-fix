const GameLetters = ({ lettersArr }) => {
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
      <ul className="available-letters">
        {lettersArr.map((letter) => {
          return (
            <li className="available-letter" key={letter.number}>
              <button>{letter.letter}</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default GameLetters;
