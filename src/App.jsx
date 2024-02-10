import "./App.css";

function App() {
  function handleClick(index) {
    console.log("Box Number Pressed :" + index);
  }
  return (
    <>
      <div className="board">
        <div className="box" onClick={() => handleClick(0)}></div>
        <div className="box" onClick={() => handleClick(1)}></div>
        <div className="box" onClick={() => handleClick(2)}></div>
        <div className="box" onClick={() => handleClick(3)}></div>
        <div className="box" onClick={() => handleClick(4)}></div>
        <div className="box" onClick={() => handleClick(5)}></div>
        <div className="box" onClick={() => handleClick(6)}></div>
        <div className="box" onClick={() => handleClick(7)}></div>
        <div className="box" onClick={() => handleClick(8)}></div>
      </div>
    </>
  );
}

export default App;
