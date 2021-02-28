import React, {Component} from "react";
import '../App.css'

export default class SectionHeader extends Component {

    constructor(props) {
        super(props);

        this.state = {
            text: props.text,
            hideDivider: props.hideDivider
        }
    }

    divider = () => {
        const lineY = "50%"
        const width = "95vw"

        const strokeWidth = 2

        const margin = "24px"
        const marginVert = "10vh"

        const style = {
            marginLeft: margin,
            marginRight: margin,
            marginTop: marginVert,
            marginBottom: marginVert,
            display: "inline-block",
            verticalAlign: "middle",
            textAlign: "center"
        }

        const svg =
            <svg
                width={width}
                height={strokeWidth}
                className={"item"}
                style={style}
            >
                <line x1="0" y1={lineY} x2={"100%"} y2={lineY} style={{stroke: "#323232", strokeWidth: strokeWidth}} />
            </svg>

        return(
            svg
        );
    }

    render() {
        const {text, hideDivider} = this.state

        const style = {
            textAlign: "center"
        }

        const textStyle = {
            textAlign: "center",
        }

        var divider = this.divider();

        if(hideDivider)
            divider = "";

        return(
            <div style={style}>
                {
                    divider
                }
                <div className={"section-header item"} style={textStyle}>
                    { text }
                </div>
            </div>
        )
    }

}
