import React from 'react';
import './App.css';
import logo from './logo.svg';

type Props = {
  message: string, 
  link: string 
};

const App: React.FC<Props> = ({ message, link }) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {message}
      </a>
    </header>
  </div>
);

export default App;
