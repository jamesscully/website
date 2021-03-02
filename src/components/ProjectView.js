import * as React from "react";
import './ProjectView.css'
import ProjectRepository from "../ProjectRepository";
import SmallGitHub from "../res/img/logos/github_logo_32px.png"
import {config, Spring} from "react-spring/renderprops-universal";
import Button from "./Button";
import {Link} from "react-router-dom";

export default class ProjectView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            id: props.id
        }

        console.log(this.state.id)

        this.project = ProjectRepository.getProjectById(this.state.id)
    }

    stackString() {
        let stackString = ""

        for(let i = 0; i < this.project.stack.length; i++) {
            let tech = this.project.stack[i]
            stackString += tech + "; "
        }

        return stackString
    }

    render() {
        let image = <img src={this.project.imageURL} alt={String.fromCodePoint(this.project.imageText)}/>

        // alias to remove this. keyword
        const project = this.project

        return(

            <Spring
                config={config.default}
                from={{opacity: this.state.hidden ? 1 : 0}}
                to={{opacity: this.state.hidden ? 0 : 1}}>

                { props =>
                    (
                        <div id={"project"} style={props} className={"container shadow"}>
                            <div id={"title"} >
                        <span>
                            {project.title} ({project.getTimeSpan()})
                        </span>

                                <a  id="linkToGitHub"
                                    href={project.github}
                                    target="_blank"
                                    rel={"noopener noreferrer"}>
                                    <span>Source</span>
                                    <img src={SmallGitHub} alt={"Source"}/>
                                </a>

                                <br/>

                                <p id="stack">
                                    {this.stackString()}
                                </p>
                            </div>

                            <div id={"description_container"}>
                                <div id="image" className={"item"}>
                                    {image}
                                </div>
                                <div id={"description"} className={"item"}>
                                    <p>
                                        {project.description}
                                    </p>
                                </div>
                            </div>

                            <Link to={`/project/${this.project.id}`}>
                                <Button
                                    key={this.project.title}
                                    text={"Read more"}
                                    className={"flex-end float-right"}
                                />
                            </Link>

                        </div>
                    )
                }


            </Spring>
        )
    }
}
