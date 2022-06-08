import { useState } from "react";
import ScoreCard from "./ScoreCard";

const Form = ({ setLetters, answer, setAnswer, setNewLetters }) => {
    const [answersList, setAnswersList] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setAnswersList((currList) => {
            return [...currList, answer];
        });
        setAnswer("");

        /********
         *
         * Set the toggle object all back to false
         *
         *  *******/

        setNewLetters({
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
    };
    return (
        <>
            <form className="input-box" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="user-input-box"
                    value={answer}
                    readOnly
                />
                <button type="submit" className="submit"></button>
            </form>
            <ScoreCard answersList={answersList} />
        </>
    );
};

export default Form;
