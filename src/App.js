import React from 'react';
import logo from './logo.svg';
import './App.css';
import Checkbutton from "./components/Checkbutton";
import ProjectShowcase from "./components/ProjectShowcase";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/*<Checkbutton text="C++"/>*/}
        {/*<Checkbutton text="Java"/>*/}
        {/*<Checkbutton text="Kotlin"/>*/}
        {/*<Checkbutton text="C"/>*/}
        {/*<Checkbutton text="Game Dev."/>*/}
        {/*<Checkbutton text="Graphics"/>*/}
        {/*<Checkbutton text="Blender"/>*/}

        <ProjectShowcase project={"test"}/>

      </header>
    </div>
  );
}

export default App;
