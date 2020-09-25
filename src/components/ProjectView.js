import * as React from "react";
import './ProjectView.css'
import ProjectRepository from "../ProjectRepository";

export default class ProjectView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            id: props.id
        }

        console.log(`Retrieving project for ${props.id}`)
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
        // ignore if we're hidden
        if(this.state.hidden)
            return null

        let image = <img src={this.project.imageURL} alt={String.fromCodePoint(this.project.imageText)}/>


        const spacer = { height: "10px" }

        return(
            <table key={this.project.title} id="project">
                <tbody>
                <tr>
                    <th colSpan="2" id="title"> {this.project.title}
                        <a id="linkToGitHub"
                           href={this.project.github}
                           target="_blank"
                           rel={"noopener noreferrer"}>
                            View on GitHub
                        </a>

                        <br/>

                        <p id="stack">
                            {this.stackString()}
                        </p>
                    </th>
                </tr>

                <tr style={spacer}/>

                <tr>
                    <td id="image">
                        {image}
                    </td>
                    <td id="description">
                        <p>
                            {this.project.description}
                        </p>
                    </td>
                </tr>
                </tbody>
            </table>

        )
    }
}
