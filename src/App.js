import React from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import Header from './components/Header/Header';
import About from './components/About/About';
import UserGuide from './components/UserGuide/UserGuide';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Menu />
      <Header />
      <About />
      <UserGuide />
      <Footer />
    </div>
  );
}

export default App;
