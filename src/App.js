import React from "react";
import logo from "./assets/ursip_logo.svg";
import Books from "./features/books/Books";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
      <main>
        <Books />
      </main>
    </div>
  );
}

export default App;
