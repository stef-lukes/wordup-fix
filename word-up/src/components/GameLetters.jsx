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
    </>
  );
};

export default GameLetters;
