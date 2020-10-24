import React, {Component} from 'react';
import './App.css';
import Checkbutton from "./components/Checkbutton";
import ProjectView from "./components/ProjectView";
import ProjectRepository from './ProjectRepository'
import GitHubImg from './res/img/github_logo_120px.png'
import LinkedInImg from './res/img/linkedin_logo.png'
import Avatar from './res/img/avatar_placeholder_400px.png'
import {EducationSection} from "./components/sections/education/EducationSection";

import SectionHeader from "./components/SectionHeader";
import SocialButton from "./components/SocialButton";
import Button from "./components/Button";
import PageRouter from "./components/PageRouter";

const images = require.context('./res/img/', true);


export default class App extends Component {
    constructor(props) {
        super(props);

        ProjectRepository.populate()
    }

    render() {
        return (
            <div className="App">
                {/*<NavBar/>*/}
                <PageRouter/>
            </div>
        );
    }
}

