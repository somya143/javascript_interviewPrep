import React from "react";
import './App.css';

function App() {
let inputref = React.useRef(null);
let handleClick = () => {
  inputref.current.focus();
}

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" placeholder="...type" ref={inputref}  />
        <button onClick={handleClick} >Click</button>
      </header>
    </div>
  );
}

export default App;
