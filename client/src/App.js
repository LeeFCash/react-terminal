import './App.css';


function App() {
  const screen1 = "null";
  return (
    <div className="App">
        {screen1 ? (
          <>
          <input id="App-input"></input>
          <button id="App-button">hello</button>
          </>
        ) : (
          <>
          <p>Nothing</p>
          </>
        )}
    </div>
  );
}

export default App;
