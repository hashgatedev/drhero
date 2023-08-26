import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Landingpage/pages/index';
import HomeArabic from './Landingpage/pages/index2';
import Terms from './Landingpage/terms&condition/index';
import Privacy from './Landingpage/privacy&policy/index';


function App() {
  return (
    <Router>
      <div className="App">
        <div className="center-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Arabic" element={<HomeArabic />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
