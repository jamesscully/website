import React, {Component} from 'react'
import '../css/NavBar.css'

export default class NavBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
          <div id={"navbar"}>
              <div className={"navbutton"}>Home</div>
              <div className={"navbutton"}>Resume</div>
              <div className={"navbutton"}>GitHub</div>
          </div>
        );
    }
}
