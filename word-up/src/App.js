import "./App.css";

import "./components/VowelPicker";
import GameLetters from "./components/GameLetters";
import VowelPicker from "./components/VowelPicker";
import ConsonantPicker from "./components/ConsonantPicker";
import UserInput from "./components/UserInput";

import { useState } from "react";

function App() {
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
