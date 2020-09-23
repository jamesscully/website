import * as React from "react";
import './ProjectShowcase.css'


export default class ProjectShowcase extends React.Component {
    constructor(props) {
        super(props);

        const json = require('../projects.js');

        this.state = {
            project: json[props.project.toString()]
        }

    }

    render() {
        return null
    }
}
