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

        const lineY = "70%"
        const lineX = "125px"

        const svg =
            <svg style={style} height={"50"} width={lineX}>
                <line x1="0" y1={lineY} x2={lineX} y2={lineY} style={{stroke: 'rgb(255, 255, 255)', strokeWidth: 4}} />
            </svg>

        return(
            svg
        );
    }

    render() {
        const {text} = this.state

        const style = {
            verticalAlign: "middle"
        }

        return(
            <div className={"section-header"} style={style}>
                {this.divider()} &nbsp; {text} &nbsp; {this.divider()}
            </div>
        )
    }

}
