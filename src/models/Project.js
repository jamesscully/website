import * as React from "react";

export default class Project {

    constructor(json_object) {
        this.title = json_object.title
        this.image = json_object.image
        this.imageText = json_object.imageText
        this.startDate = json_object.startDate
        this.endDate = json_object.endDate
        this.description = json_object.description
        this.tags = json_object.tags
        this.stack = json_object.stack
        this.github = json_object.github
    }

    hasTag(tag) {
        return this.tags.includes(tag)
    }

    stackString() {
        let stackString = ""

        for(let i = 0; i < this.stack.length; i++) {
            let tech = this.stack[i]
            stackString += tech + "; "
        }

        return stackString
    }

    toShowcase() {
        let image = ""

        // load either image or text (emoji)
        if(image === "") {
            // if empty, load string
            if(this.imageText !== "") {
                image = String.fromCodePoint(this.imageText)
            } else {
                image = ""
            }
        } else {
            image = "<img src='" + this.image + "' alt=" + this.imageText + "/>"
        }

        const spacer = {
            height: "20px"
        }

        return (
            <table id="project">
                <tbody>
                <tr>
                    <th colSpan="2" id="title"> {this.title}
                        <a id="linkToGitHub"
                           href={this.github}
                           target="_blank"
                           rel={"noopener noreferrer"}>
                            View on GitHub
                        </a>

                        <br/>

                        <p id="stack">
                            {this.stackString}
                        </p>
                    </th>
                </tr>

                <tr style={spacer}/>

                <tr>
                    <td id="image">
                        {image}
                    </td>
                    <td id="description">
                        {this.description}
                    </td>
                </tr>
                </tbody>
            </table>
        )
    }
}
