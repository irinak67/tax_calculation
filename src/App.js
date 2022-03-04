import logo from './logo.svg';
import './App.css';
import Tax1 from "./Tax1"


function App() {
  return (
      <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <label id="app">income tax calculation</label>
      <Tax1/>
    </div>
  );
}

export default App;
