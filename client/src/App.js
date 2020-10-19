import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Todos } from './features/userTodos/Todos'
import './App.css';

function App() {
  return (
    <div className="App">
      <Todos />
    </div>
  );
}

export default App;
