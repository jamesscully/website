import React, {Component} from "react";

export default class SocialButton extends Component {

    constructor(props) {
        super(props);

        this.state = {
            image: props.img,
            link: props.href
        }
    }

    render() {
        const divStyle = {
            width: "30px",
            height: "30px",
            padding: "10px",
            userSelect: "none",
            borderRadius: "100px",
            marginLeft: "10px",
            marginRight: "10px",
            display: "inline-block",
            backgroundColor: "var(--color-primary)",
            cursor: "pointer",
            lineHeight: "24px",
            objectFit: "contain"
        }

        const imgStyle = {
            width: "30px",
            height: "30px",
            float: "left"
        }

        const {link, image} = this.state

        return(
            <div style={divStyle}>
                <a href={link} target="_blank" rel={"noopener noreferrer"}>
                    <img style={imgStyle} src={image} alt={"Social"}/>
                </a>
            </div>
        )
    }
}
