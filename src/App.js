import React, {Component, useState} from 'react';
import './App.css';
import Checkbutton from "./components/Checkbutton";
import ProjectView from "./components/ProjectView";
import ProjectRepository from './ProjectRepository'

function filterTag(enabled, tag) {
    console.log(`${tag} enabled: ${enabled}`)

    if(enabled) {

    }

}

function App() {
    ProjectRepository.populate()

    let projects = ProjectRepository.getProjects()
    let foundTags = ProjectRepository.tagMap.keys()

    const [filter, tags] = useState(foundTags)


    console.log("Tags: " + filter)

      return (
        <div className="App">
          <header className="App-header">
            <div id={"CheckbuttonContainer"}>
                {
                    // for each tag, add button if not in blacklist
                    foundTags.map((tag) => {

                        const blacklist = ["CMake"]

                        if(blacklist.includes(tag))
                            return null

                        return (
                            <div key={tag} className={"checkbutton"}>
                                <Checkbutton  tag={tag} callback={(enabled) => {
                                    filterTag(enabled, tag)
                                }} />
                            </div>
                        );
                    })
                }
            </div>
          </header>

          <div id={"ProjectContainer"}>
              {
                projects.map((project) => {

                    // console.log("Drawing projects")
                    let element = <ProjectView key={project.id} id={project.id} />

                    for(const index in project.tags) {

                        const tag = project.tags[index]
                        const matches = ProjectRepository.filterTags.get(tag)

                        // console.log(`Checking if ${tag} is in hashmap: ${matches}`)

                        if(matches)
                            return element
                        else
                            return null
                    }
                    return null
                })
              }
          </div>
        </div>
      );


}


export default App;
