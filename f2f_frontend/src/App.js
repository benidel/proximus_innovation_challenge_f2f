import './App.sass';
import React from 'react';
// ---------------- COMPONENTS IMPORT ----------------
import Header from './components/Header/Header';
import SideNav from './components/SideNav/SideNav';
import Content from './components/Content/Content';
import TextBox from './components/TextBox/Textbox';

function App() {
  // --------------------------- DATA ------------------------

  // -------------------------- DISPLAY ----------------------
  return (
    <div className="App">
      <Header />
      <SideNav />
      <Content />
      <TextBox />
    </div>
  );
}

export default App;
