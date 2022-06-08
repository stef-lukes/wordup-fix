import { useState } from "react";
import Letter from "./Letter";
import VowelPicker from "./VowelPicker";
import ConsonantPicker from "./ConsonantPicker";
import Form from "./Form";

const UserInput = () => {
    const [lettersArr, setLetters] = useState([
        { id: 1, letter: "" },
        { id: 2, letter: "" },
        { id: 3, letter: "" },
        { id: 4, letter: "" },
        { id: 5, letter: "" },
        { id: 6, letter: "" },
        { id: 7, letter: "" },
        { id: 8, letter: "" },
        { id: 9, letter: "" },
    ]);

    /********
     *
     * toggle obj below- easy to change than the objects inside the array, because you can get access to everything without having to loop through - as long as you know the key i.e. the id
     *
     * The name isnt good.
     *
     *  *******/
    const [newLettersObj, setNewLetters] = useState({
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
    });
    const [answer, setAnswer] = useState("");

    return (
        <>
            <ul className="picked-letters">
                {lettersArr.map((letterObj) => (
                    <Letter
                        className="letter-item"
                        key={letterObj.id}
                        letterObj={letterObj}
                        setAnswer={setAnswer}
                        setNewLetters={setNewLetters}
                        newLettersObj={newLettersObj}
                    />
                ))}
            </ul>
            <VowelPicker setLetters={setLetters} />
            <ConsonantPicker setLetters={setLetters} />
            <Form
                setLetters={setLetters}
                answer={answer}
                setAnswer={setAnswer}
                setNewLetters={setNewLetters}
            />
        </>
    );
};

export default UserInput;
