import "./App.css";

import "./components/VowelPicker";
import GameLetters from "./components/GameLetters";
import VowelPicker from "./components/VowelPicker";
import ConsonantPicker from "./components/ConsonantPicker";
import UserInput from "./components/UserInput";

import { useState } from "react";

function App() {
  const [lettersArr, setLetters] = useState([
    { number: 1, letter: "" },
    { number: 2, letter: "" },
    { number: 3, letter: "" },
    { number: 4, letter: "" },
    { number: 5, letter: "" },
    { number: 6, letter: "" },
    { number: 7, letter: "" },
    { number: 8, letter: "" },
    { number: 9, letter: "" },
  ]);

  return (
    <div className="App">
      <GameLetters lettersArr={lettersArr} />
      <VowelPicker setLetters={setLetters} />
      <ConsonantPicker setLetters={setLetters} />
      <UserInput lettersArr={lettersArr} />
    </div>
  );
}

export default App;
