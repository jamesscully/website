import * as React from "react";

export default class Checkbutton extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            checked: true,
            text: props.text
        }
    }

    toggle = () => {
        this.setState({
            checked: !this.state.checked
        })
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
            minWidth: 100,
            float: "left",
            fontWeight: "bold"
        }

        // use str for starters
        let image = ""

        // change on/off stuff here
        if (this.state.checked) {
            mStyle.backgroundColor = "green"
            image = "\u2713"
        } else {
            mStyle.backgroundColor = "red"
            image = ""
        }

        return (
            <div style={mStyle} onClick={this.toggle}>
                {image} {this.state.text}
            </div>
        );
    }
}


