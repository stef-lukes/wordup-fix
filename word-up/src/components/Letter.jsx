const Letter = ({
    letterObj,
    setAnswer,

    setNewLetters,
    newLettersObj,
}) => {
    const letterId = letterObj.id;
    // let letter = letterObj.letter;

    // const [isToggled, setIsToggled] = useState(letterObj.isToggled);

    // const onToggle = (id) => {
    //     setIsToggled((letterObj.isToggled = !isToggled));
    //     setAnswer((currAnswer) => {
    //         if (letterId === id && letterObj.isToggled === true) {
    //             currAnswer += letter;
    //         } else if (
    //             letterId === id &&
    //             letterObj.isToggled === false &&
    //             currAnswer.includes(letter)
    //         ) {
    //             return currAnswer.replace(letter, "");
    //         }
    //         return currAnswer;
    //     });
    // };

    const handleClick = ({ target }) => {
        const id = target.id;
        let prevBool = false;
        const letter = target.innerText;

        setNewLetters((prevLetters) => {
            const currentBool = prevLetters[id];
            prevBool = !currentBool;
            return { ...prevLetters, [id]: !currentBool };
        });
        setAnswer((currAnswer) => {
            if (letterId === +id && prevBool === true) {
                currAnswer += letter;
            } else if (
                letterId === +id &&
                !prevBool &&
                currAnswer.includes(letter)
            ) {
                return currAnswer.replace(letter, "");
            }
            return currAnswer;
        });
    };

    return (
        <>
            {/* <li className="letter-item" key={letterId}>
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
            </li> */}

            <div
                onClick={handleClick}
                id={letterId}
                className={
                    !newLettersObj[letterId]
                        ? `letter__item`
                        : `letter__item toggled `
                }
            >
                {letterObj.letter}
            </div>
        </>
    );
};

export default Letter;
