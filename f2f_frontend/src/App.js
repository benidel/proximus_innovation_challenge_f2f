import './App.css';
import React from 'react';
// ---------------- COMPONENTS IMPORT ----------------
import SideNav from './components/SideNav/SideNav';
import Content from './components/Content/Content';


function App() {
  // --------------------------- SCRIPT ------------------------
  // $(function(){
  //   $(".heading-compose").click(function() {
  //     $(".side-two").css({
  //       "left": "0"
  //     });
  //   });

  //   $(".newMessage-back").click(function() {
  //     $(".side-two").css({
  //       "left": "-100%"
  //     });
  //   });
  // })   SCRIPT FUNCTION IS NOT WORKING

  // -------------------------- DISPLAY ----------------------
  return (
    <div className="App">
      <div className="banner"></div>
      <div class="container app">
        
        <div class="row app-one">
          <SideNav />
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
