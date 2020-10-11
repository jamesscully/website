import React, {Component} from 'react';
import './App.css';
import Checkbutton from "./components/Checkbutton";
import ProjectView from "./components/ProjectView";
import ProjectRepository from './ProjectRepository'
import GitHubImg from './res/img/GitHub-Mark-Light-120px-plus.png'
import LinkedInImg from './res/img/LI-In-Bug120px.png'
import Avatar from './res/img/avatar_placeholder_400px.png'

import NavBar from "./components/NavBar";
import {EducationSection} from "./components/sections/education/EducationSection";
import Card from "./components/Card";

const images = require.context('./res/img/', true);

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

        newMap.set(tag, enabled)

        this.setState({
            filter: newMap
        })
    }

    render() {
        return (
            <div className="App">
                {/*<NavBar/>*/}
                <header className="App-header">
                    Greetings! I'm
                    <h1>James Scully</h1>

                    <div>
                        <div className="socialBtn">
                            <a href="https://www.github.com/jamesscully/" target="_blank" rel={"noopener noreferrer"}>
                                <img src={GitHubImg} alt={"GitHub"}/>
                            </a>
                        </div>

                        <div className="socialBtn">
                            <a href="https://www.linkedin.com/in/james-scully-852b8797/" target="_blank" rel={"noopener noreferrer"}>
                                <img src={LinkedInImg} alt={"LinkedIn"}/>
                            </a>
                        </div>
                    </div>
                </header>

                <div className={"section"}>
                    A bit about me
                </div>

                <div id={"IntroContainer"}>
                    <div id={"IntroText"}>
                        <p>
                            I'm a graduate from the University of Nottingham, with a BSc (2:1) in Computer Science
                            <br/>
                            I particularly enjoy working on software that makes life easier, or that keeps me up at night!
                            <br/>
                            <br/>
                            I typically work with Android for real-world applications, but enjoy a variety of languages.
                        </p>
                    </div>
                    <img src={Avatar} alt={""}/>

                </div>


                <span id={"ProjectsPreamble"}>
                    <div className={"section"}>Projects</div>
                </span>

                <div id={"CheckbuttonContainer"}>
                    <b>Filter by tag: <br/> <br/></b>
                    {
                        // for each tag, add button
                        this.state.allTags.map((tag, index) => {
                            let filtered = this.state.filter.get(tag)
                            return (
                                <Checkbutton key={index} tag={tag} checked={filtered} callback={(enabled) => {
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
                            return (valid && <ProjectView key={project.id} id={project.id} />)
                        })
                    }
                </div>

                <span id={"ProjectsPreamble"}>
                    <div className={"section"}>
                        Education
                    </div>
                </span>

                <EducationSection/>

                <div className={"section"}>
                    Bits and Bobs
                </div>

            </div>

        );
    }
}

