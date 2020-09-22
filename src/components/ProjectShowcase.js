import * as React from "react";
import './ProjectShowcase.css'

export default class ProjectShowcase extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            projectName: props.project
        }
    }

    render() {

        let imageStyle = {
            textAlign: "center",
            verticalAlign: "middle",
            fontSize: "50px",
            cursor: "default",
            userSelect: "none"
        }

        return (
            <table id="project">
                <tbody>
                <tr>
                    <th colSpan="2" id="projTitle">
                        Bottling Up Assistant (2018/2019)<a id="linkToGitHub"
                                                            href="https://github.com/jamesscully/spoons-bottle-up"
                                                            target="_blank">View on GitHub</a> <br/>
                        <p id="miscInfo">Android; Java; SQL</p>
                    </th>
                </tr>

                <tr id="projBody">
                </tr>

                <tr>
                    <td id="projImg"
                        style={imageStyle}>
                        🍾
                    </td>
                    <td id="projDesc">
                        Mobile application for speeding up restocking of fridges at my previous workplace
                    </td>
                </tr>
                </tbody>
            </table>
        );
    }
}
