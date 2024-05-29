import React from 'react';
import './App.css'; // Keeps the styling from App.css
import Dashboard from './Dashboard/dashboard';


import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
