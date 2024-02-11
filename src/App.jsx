import { useState } from "react";
import "./App.css";

function App() {
  const [player, setPlayer] = useState(true);

  const [boxContent, setBoxContent] = useState(Array(9).fill(null));

  function handleClick(index) {
    console.log("Box Number Pressed :" + index);
    const newBoxContent = [...boxContent];
    player ? (newBoxContent[index] = "x") : (newBoxContent[index] = "o");
    setPlayer(!player);
    setBoxContent(newBoxContent);
  }

  function clearboard() {
    setBoxContent(Array(9).fill(null));
    setPlayer(true);
  }

  return (
    <>
      <div className="board">
        {boxContent.map((value, index) => (
          <div key={index} className="box" onClick={() => handleClick(index)}>
            {value}
          </div>
        ))}
      </div>
      <button className="clear-board-btn" onClick={clearboard}>
        Clear Board
      </button>
    </>
  );
}

export default App;
