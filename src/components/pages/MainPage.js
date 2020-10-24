import React from "react";
import SocialButton from "../SocialButton";
import GitHubImg from "../../res/img/github_logo_120px.png";
import LinkedInImg from "../../res/img/linkedin_logo.png";
import SectionHeader from "../SectionHeader";
import Button from "../Button";
import Avatar from "../../res/img/avatar_placeholder_400px.png";
import Checkbutton from "../Checkbutton";
import ProjectView from "../ProjectView";
import {EducationSection} from "../sections/education/EducationSection";
import ProjectRepository from "../../ProjectRepository";
import {Link} from "react-router-dom";

var HashMap = require('hashmap')


export default class MainPage extends React.Component {
    constructor(props) {
        super(props);

        ProjectRepository.populate()

        let filterMap = new HashMap()

        this.state = {
            projects: ProjectRepository.getProjects(),
            allTags: ProjectRepository.tagMap.keys(),
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

        // update actual filter object, not directly modify
        this.setState({
            filter: newMap
        })
    }

    render() {
        return(
            <div>
                <header className="App-header">
                    Greetings! I'm
                    <h1>James Scully</h1>

                    <span>
                        <SocialButton img={GitHubImg} href={"https://www.github.com/jamesscully"}/>
                        <SocialButton img={LinkedInImg} href={"https://www.linkedin.com/in/james-scully-852b8797/"}/>
                    </span>
                </header>
                <div className={"section"}>
                    <SectionHeader text={"A bit about me"}/>
                    <div id={"IntroContainer"}>
                        <div id={"IntroText"}>
                            <p>
                                Hello! I'm James, a programmer that enjoys making life easier.
                                <br/> <br/>
                                I graduated from the University of Nottingham with an upper-class second honours in June 2020,
                                and since then, have been looking for opportunities!
                                <br/> <br/>
                                I typically work with Android, however I enjoy any language or tech that is the right tool for the job. This website written in React.js for example!
                            </p>

                            <a
                                href={'https://jwscully.uk/resume.pdf'}
                                target={"_blank"}
                                rel={"noopener noreferrer"}
                            >
                                <Button
                                    text={"View my Resume"}
                                />
                            </a>
                        </div>
                        <img id={"IntroImage"} src={Avatar} alt={""}/>
                    </div>
                </div>
                <div className={"section"}>
                    <SectionHeader text={"Projects"}/>

                    <div id={"CheckbuttonContainer"}>
                        <b>Filter by tag: <br/><br/></b>
                        {
                            // for each tag, add button
                            this.state.allTags.map((tag, index) => {
                                let filtered = this.state.filter.get(tag)
                                return (
                                    <Checkbutton
                                        key={index}
                                        tag={tag}
                                        checked={filtered}
                                        callback={(enabled) => {
                                            this.filterTag(tag, enabled)
                                        }}
                                    />
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
                </div>
                <div className={"section"}>
                    <SectionHeader text={"Education"}/>
                    <EducationSection/>
                </div>
                <div className={"section"}>
                    <SectionHeader text={"Bits and Bobs"}/>
                </div>
            </div>
        )
    }
}
