import React from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import Header from './components/Header/Header';
import About from './components/About/About';
import ScoringMechanics from './components/ScoringMechanics/ScoringMechanics';
import UserGuide from './components/UserGuide/UserGuide';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Menu />
      <Header />
      <About />
      <ScoringMechanics />
      <UserGuide />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
