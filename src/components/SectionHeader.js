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
        const lineY = "50%"
        const width = "10%"

        const strokeWidth = 5

        const margin = "24px"

        const style = {
            marginLeft: margin,
            marginRight: margin
        }

        const svg =
            <svg
                width={width}
                height={strokeWidth}
                className={"item"}
                style={style}
            >
                <line x1="0" y1={lineY} x2={"100%"} y2={lineY} style={{stroke: 'rgb(255, 255, 255)', strokeWidth: strokeWidth}} />
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
            <div className={"section-header item"} style={style}>
                {this.divider()} {text} {this.divider()}
            </div>
        )
    }

}
