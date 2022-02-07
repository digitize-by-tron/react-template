import './App.css';
import React from 'react';
import logo from './logo.svg';
import { Button, Typography } from '@mui/material';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className='App-logo' alt='logo' />
        <Typography variant="h2">Digitize React Template</Typography>
        <p>
          Edit <code>src/App.js</code> and save to reload. <br />
          This is the default react template with Material UI 5.0 for Digitize . <br />
        </p>
        <Button
          variant="outlined"
          className="App-link"
          href="https://digitize.staging.dso.mil/sites/docs/deploy/CRA/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Digitize Help for CRA
        </Button>
      </header>
    </div>
  );
}

export default App;
