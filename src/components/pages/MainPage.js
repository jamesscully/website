import React from "react";
import SocialButton from "../SocialButton";
import GitHubImg from "../../res/img/logos/github_logo_120px.png";
import LinkedInImg from "../../res/img/logos/linkedin_logo.png";
import SectionHeader from "../SectionHeader";
import Button from "../Button";
import Avatar from "../../res/img/avatar_placeholder_400px.png";
import Checkbutton from "../Checkbutton";
import ProjectView from "../ProjectView";
import {EducationSection} from "../sections/education/EducationSection";
import ProjectRepository from "../../ProjectRepository";

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
                                Hello! I'm James, a Computer Science graduate from the University of Nottingham.
                                <br/> <br/>
                                I enjoy creating software that makes life easier, namely with the use
                                of Android. I also enjoy tinkering with Linux (extensively) and new tech that can
                                become useful in other projects down the line!
                                <br/> <br/>
                                You can check out some of my projects in the <a href={"#projects"}>portfolio</a> section
                                below.
                                <br/> <br/>
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
                        {/*<img id={"IntroImage"} src={Avatar} alt={""}/>*/}
                    </div>
                </div>
                <div id={"projects"} className={"section"}>
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
