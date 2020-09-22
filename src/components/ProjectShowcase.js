import * as React from "react";
import './ProjectShowcase.css'

let Project = require('../models/Project')

export default class ProjectShowcase extends React.Component {
    constructor(props) {
        super(props);

        var json = require('../projects.json')

        if(props.project in json) {
            console.log("We've found a hit!")
        }

        this.state = {
            project: json[props.project.toString()]
        }

        console.log(this.state.project)
    }

    render() {

        let imageStyle = {
            textAlign: "center",
            verticalAlign: "middle",
            fontSize: "50px",
            cursor: "default",
            userSelect: "none"
        }

        // eslint-disable-next-line no-undef
        const project = this.state.project

        let stackString = ""

        // customize stack string
        for(let i = 0; i < project.stack.length; i++) {
            let tech = project.stack[i]

            stackString += tech + "; "
        }

        // load either image or text (emoji)




        return (
            <table id="project">
                <tbody>
                <tr>
                    <th colSpan="2" id="projTitle"> {project.title}
                        <a id="linkToGitHub"
                           href={project.github}
                           target="_blank"
                           rel={"noopener noreferrer"}
                        >View on GitHub
                        </a>

                        <br/>

                        <p id="miscInfo">
                            {stackString}
                        </p>
                    </th>
                </tr>

                <tr id="projBody">
                </tr>

                <tr>
                    <td id="projImg"
                        style={imageStyle}>

                    </td>
                    <td id="projDesc">
                        {project.description}
                    </td>
                </tr>
                </tbody>
            </table>
        );
    }
}
