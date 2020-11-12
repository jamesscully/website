import React, {Component} from 'react';
import './App.css';
import ProjectRepository from './ProjectRepository'
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

