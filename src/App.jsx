import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import UserPage from './components/UserPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route exact path='/:id' element={<UserPage/>}/>
      </Routes>
    </Router>
  )
}

export default App;