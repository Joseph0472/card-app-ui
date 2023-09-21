import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomeScreen from './views/HomeScreen';

import './App.css';
import MenuScreen from './views/MenuScreen';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" Component={HomeScreen} />
          <Route path="/menu" Component={MenuScreen} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
