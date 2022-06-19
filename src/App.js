import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState("Default Title");

  useEffect(() => {
    document.title = process.env.REACT_APP_TITLE;
  }, [title]);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{process.env.REACT_APP_TITLE}</h1>
      </header>
    </div>
  );
}

export default App;
