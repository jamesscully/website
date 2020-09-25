import React from 'react';
import './App.css';
import Checkbutton from "./components/Checkbutton";
import ProjectView from "./components/ProjectView";
import ProjectRepository from './ProjectRepository'
import Project from "./models/Project";

function App() {

    ProjectRepository.populate()

  let projects = ProjectRepository.getProjects()
  // let visibleProjects = ProjectRepository.getVisibleProjects()

  projects.map(function (p) {
      console.log(p.title + " " + p.hasTag("C++"))
      return true
  })

    const foundTags = ProjectRepository.tagMap.keys()

    const checkButtons = foundTags.map((tag) => {

        const blacklist = ["CMake"]

        if(blacklist.includes(tag))
            return null

        return(
            <Checkbutton key={tag} tag={tag}/>
        )
    })

    const projectViews = projects.map((project) => {
        return <Project id={project.id}/>
    })

  return (
    <div className="App">
      <header className="App-header">
        <div id={"CheckbuttonContainer"}>
            {checkButtons}
        </div>
      </header>

      <div id={"ProjectContainer"}>

          {
              projects.map((project) => {
                  return <ProjectView id={project.id} />
              })
          }

      </div>
    </div>
  );


}

export default App;
