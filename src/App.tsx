import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomeScreen from './views/HomeScreen';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" Component={HomeScreen} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
