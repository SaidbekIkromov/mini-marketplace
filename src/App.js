import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <div className="header-container">
            <div className="header-content">
              <h1 className="header-title">Mini Marketplace</h1>
              <p className="header-tagline">Designed by Saidbek Ikromov</p>
            </div>
          </div>
        </header>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

