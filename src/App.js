import React, {Component} from 'react';
import './App.css';
import Checkbutton from "./components/Checkbutton";
import ProjectView from "./components/ProjectView";
import ProjectRepository from './ProjectRepository'
import GitHubImg from './res/img/GitHub-Mark-Light-120px-plus.png'
import LinkedInImg from './res/img/LI-In-Bug120px.png'

var HashMap = require('hashmap')

export default class App extends Component {
    constructor(props) {
        super(props);
        ProjectRepository.populate()

        let filterMap = new HashMap()

        this.state = {
            projects: ProjectRepository.getProjects(),
            allTags: ProjectRepository.tagMap.keys(),
            // filter: ProjectRepository.tagMap.keys()
            filter: filterMap
        }

        // enable all by default (until params)
        this.state.allTags.map((tag) => {
            return this.state.filter.set(tag, true)
        })

    }

    filterTag(tag, enabled) {

        let newMap = this.state.filter

        if(tag === "Android") {
            // this.filterTag("Java", enabled)
            // this.filterTag("Kotlin", enabled)

            newMap.set("Java", enabled)
            newMap.set("Kotlin", enabled)

            console.log(`Setting Java/Kotlin/Android to ${enabled}`)
        }

        newMap.set(tag, enabled)

        console.log(`New filters: ${newMap.entries()} `)

        this.setState({
            filter: newMap
        })
    }

    render() {
        console.log("Rendering")
        return (

            <div className="App">
                <header className="App-header">
                    Greetings! I'm

                    <h1>James Scully</h1>

                    <div className="socialBtn">
                        <a href="https://www.github.com/jamesscully/" target="_blank" rel={"noopener noreferrer"}>
                            <img src={GitHubImg} alt={"GitHub"}/>
                        </a>
                    </div>


                    <a href="https://www.linkedin.com/in/james-scully-852b8797/" target="_blank" rel={"noopener noreferrer"}>
                        <div className="socialBtn">
                            <img src={LinkedInImg} alt={"LinkedIn"}/>
                        </div>
                    </a>
                </header>


                <span id={"IntroText"}>
                    <h1>A bit about me</h1>



                </span>

                <span id={"ProjectsPreamble"}>
                    <h1>Projects</h1>
                    If you've found yourself here, you're likely looking for what I've done. <br/>
                    Here it is. You can filter by the tags below for relevance.
                </span>



                <div id={"CheckbuttonContainer"}>
                    {
                        // for each tag, add button
                        this.state.allTags.map((tag) => {
                            let filtered = this.state.filter.get(tag)
                            console.log(`Creating ${tag} as ${filtered}`)
                            return (
                                <Checkbutton tag={tag} checked={filtered} callback={(enabled) => {
                                    this.filterTag(tag, enabled)
                                }} />
                            );
                        })
                    }
                </div>

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
                                valid = this.state.filter.get(tag)
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

