import React from 'react';
import './App.css';
import Main from './Components/Main';
import { Routes, Route } from 'react-router-dom'


const App = () => {
  return(
    <div>
      <Routes>
        <Route path="/" element={<Main />}/>
      </Routes>
    </div>
  )
}

export default App;
