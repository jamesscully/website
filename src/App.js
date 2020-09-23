import React from 'react';
import './App.css';
import Checkbutton from "./components/Checkbutton";
import ProjectShowcase from "./components/ProjectShowcase";
import ProjectRepository from './ProjectRepository'

function App() {

  let projects = ProjectRepository.getProjects()

  projects.map(function (p) {
      console.log(p.title + " " + p.hasTag("C++"))
      return true
  })

    console.log(ProjectRepository.hmap)

  return (
    <div className="App">
      <header className="App-header">

        <Checkbutton text="C++"/>
        <Checkbutton text="Java"/>
        <Checkbutton text="Kotlin"/>
        <Checkbutton text="C"/>
        <Checkbutton text="Game Dev."/>
        <Checkbutton text="Graphics"/>
        <Checkbutton text="Blender"/>

        {
          projects.map(function (p) {
            return p.toShowcase()
          })
        }

        <ProjectShowcase project={"bottleup"}/>
        <ProjectShowcase project={"openglbeach"}/>
        <ProjectShowcase project={"openglcollege"}/>

      </header>
    </div>
  );


}

export default App;
