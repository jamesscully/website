import * as React from "react";
import {Link} from "react-router-dom";

import {ProjectsData} from "../../data/projects";

import './ProjectPage.css'
import Button from "../Button";

export default class ProjectPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: this.props.match.params.name
        }
    }

    onClick = () => {
        window.open("https://localhost:3000")
    }

    render() {

        const { name } = this.state


        return (
            <div id="projectPage">
                <img id="banner" src={require('../../res/img/banner_openglbeach.png')}/>

                <div id="goBack">
                    <Link to={'/'}>
                        <Button text={"Back"}/>
                    </Link>
                </div>


                <div id="projectBody">
                    <div id="projectTitle">
                        {name}
                    </div>
                </div>

            </div>
        );
    }
}

