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
            newArray.push(tag)
        } else {
            const index = newArray.indexOf(tag)
            newArray.splice(index, 1)
        }

        console.log(`New filters: ${newArray} `)

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
                            let valid = false

                            // we only need 1 tag to match for the filter
                            for(const index in project.tags) {

                                // if we've hit a valid tag, we don't need to search anymore
                                if(valid)
                                    break
                                const tag = project.tags[index]
                                valid = this.state.filter.includes(tag)
                            }

                            // return our view if valid, else hide
                            return (valid ? <ProjectView key={project.id} id={project.id} /> : null)
                        })
                    }
                </div>
            </div>
        );
    }
}

