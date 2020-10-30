import * as React from "react";
import ProjectRepository from "../ProjectRepository";
import {config, Spring} from "react-spring/renderprops";
import {animated} from "react-spring";

export default class Checkbutton extends React.Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this)

        this.state = {
            props: props,
            checked: props.checked,
            text: props.tag,
        }


        // inform app state of our initial on/off state
        this.state.props.callback(this.state.checked)

        // populate visible tags hashmap
        // ProjectRepository.filterTags.set(this.getText(), this.isChecked())
    }

    toggle = () => {
        let enabled = !this.state.checked

        this.setState({
            checked: enabled
        })



        ProjectRepository.filterTag(this.getText(), enabled)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.checked !== this.props.checked) {
            this.setState({checked: this.props.checked});
        }
    }


    getText() {
        return this.state.text
    }

    isChecked() {
        return this.state.checked
    }

    onToggle = () => {
        this.toggle()
        // send our state back to App for filtering
        this.state.props.callback(!this.state.checked)
    }

    render() {

        const {checked} = this.state

        let mStyle = {
            backgroundColor: "red"
        }

        // use str for starters
        let image = ""



        // change on/off stuff here
        if (checked) {
            mStyle.backgroundColor = "green"
            image = "\u2714"
        } else {
            mStyle.backgroundColor = "red"
            image = "\u2716"
        }



        return (
            <Spring
                config={config.default}
                from={{
                    backgroundColor: checked ? "#007400" : "#ff0000",
                    boxShadow: checked ? "2px 4px #008000" : "2px 4px #ff0000"
                }}
                to={{
                    backgroundColor: checked ? "#007400" : "#ff0000",
                    boxShadow: checked ? "2px 4px #008000" : "2px 4px #ff0000"

                }}
            >
            {
                props => (
                    <animated.div key={this.getText()} style={props} className={"check-button"} onClick={this.onToggle}>
                        {image} {this.state.text}
                    </animated.div>
                )
            }
            </Spring>
        );
    }
}


