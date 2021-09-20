import logo from "./logo.svg";
import "./App.css";

function App() {
  let onButtonClick = async () => {
    let res = await fetch("/api/werewolf");
    let data = await res.json();
    console.log(data);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <p>This is some test text and another text</p>
        <p>here we go and go</p>
        <button onClick={onButtonClick}>Make an request again</button>
      </header>
    </div>
  );
}

export default App;
