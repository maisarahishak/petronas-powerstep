import React from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import Header from './components/Header/Header';
import About from './components/About/About';
import UserGuide from './components/UserGuide/UserGuide';

function App() {
  return (
    <div className="App">
      <Menu />
      <Header />
      <About />
      <UserGuide />
    </div>
  );
}

export default App;
