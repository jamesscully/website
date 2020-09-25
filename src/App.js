import React, {Component} from 'react';
import './App.css';
import Checkbutton from "./components/Checkbutton";
import ProjectView from "./components/ProjectView";
import ProjectRepository from './ProjectRepository'


export default class App extends Component {
    constructor() {
        super();
        ProjectRepository.populate()

        this.state = {
            projects: ProjectRepository.getProjects(),
            allTags: ProjectRepository.tagMap.keys(),
            filter: ProjectRepository.tagMap.keys()
        }
    }

    filterTag(tag, enabled) {

        let newArray = this.state.filter

        if(enabled) {
            console.log(`Adding tag ${tag}`)
            newArray.push(tag)
        } else {
            console.log(`Removing tag ${tag}`)
            const index = newArray.indexOf(tag)
            newArray.splice(index, 1)
        }

        this.setState({
            filter: newArray
        })
    }

    render() {
        console.log("Rendering")
        return (
            <div className="App">
                <header className="App-header">
                    <div id={"CheckbuttonContainer"}>
                        {
                            // for each tag, add button if not in blacklist
                            this.state.allTags.map((tag) => {

                                const blacklist = ["CMake"]

                                if(blacklist.includes(tag))
                                    return null

                                return (
                                    <div key={tag} className={"checkbutton"}>
                                        <Checkbutton  tag={tag} callback={(enabled) => {
                                            this.filterTag(tag, enabled)
                                        }} />
                                    </div>
                                );
                            })
                        }
                    </div>
                </header>

                <div id={"ProjectContainer"}>
                    {
                        this.state.projects.map((project) => {
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
}

