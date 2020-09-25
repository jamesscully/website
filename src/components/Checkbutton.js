import * as React from "react";
import ProjectRepository from "../ProjectRepository";

export default class Checkbutton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            props: props,
            checked: true,
            text: props.tag,
        }

        this.toggle =this.toggle.bind(this)

        // populate visible tags hashmap
        ProjectRepository.filterTags.set(this.getText(), this.isChecked())
    }

    toggle = () => {
        this.setState({
            checked: !this.state.checked
        })

        // console.log(`Setting ${this.getText()} to ${!this.isChecked()}`)

        let value = !this.state.checked

        if(value) {
            ProjectRepository.showTag(this.getText())
        } else {
            ProjectRepository.hideTag(this.getText())
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
            backgroundColor: "red",
            borderRadius: "50px",
            padding: "10px",
            userSelect: "none",
            cursor: "pointer",
            marginLeft: "10px",
            marginRight: "10px",
            marginBottom: "5px",
            whiteSpace: "no-wrap",
            minWidth: 125,
            float: "left",
            fontWeight: "bold",
            fontSize: "14pt"
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
            <div style={mStyle} onClick={() => {
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


