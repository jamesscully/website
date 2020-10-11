import * as React from "react";
import ProjectRepository from "../ProjectRepository";

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

    render() {

        let mStyle = {
            backgroundColor: "red"
        }

        // use str for starters
        let image = ""



        // change on/off stuff here
        if (this.state.checked) {
            mStyle.backgroundColor = "green"
            image = "\u2714"
        } else {
            mStyle.backgroundColor = "red"
            image = "\u2716"
        }



        return (
            <div key={this.getText()} style={mStyle} className={"check-button"} onClick={() => {
                this.toggle()
                // send our state back to App for filtering
                this.state.props.callback(!this.state.checked)
            }
            }>
                {image} {this.state.text}
            </div>
        );
    }
}


