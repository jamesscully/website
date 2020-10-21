import React, {Component} from "react";
import '../App.css'

export default class SectionHeader extends Component {

    constructor(props) {
        super(props);

        this.state = {
            text: props.text
        }
    }

    divider = () => {
        const style = {
            fontSize: "32pt",
            fontWeight: "300"
        }

        return(
            <span style={style}>——</span>
        );
    }

    render() {
        const {text} = this.state

        const style = {
            verticalAlign: "middle"
        }

        return(
            <div className={"section-header"}>
                {this.divider()} {text} {this.divider()}
            </div>
        )
    }

}
