import React, {Component} from "react";

export default class SocialButton extends Component {

    constructor(props) {
        super(props);

        this.state = {
            image: props.img,
            link: props.href,
            text: props.text,
            alt: props.alt
        }
    }

    render() {
        const divStyle = {
            width: "50px",
            height: "50px",
            padding: "20px",
            userSelect: "none",
            borderRadius: "100px",
            margin: "10px",
            display: "inline-flex",
            backgroundColor: "var(--color-primary)",
            cursor: "pointer",
            lineHeight: "50px",
            objectFit: "contain",
            zIndex: "1",
            textDecoration: "none",
            textAlign: "center",
            verticalAlign: "center"
        }

        const imgStyle = {
            width: "50px",
            height: "50px",
            zIndex: "1",

            float: "left"
        }

        const {link, image, text, alt} = this.state

        var isTextButton = text != null || text !== ""
        var isImageButton = image != null

        return(
            <div className={"social-button"} style={divStyle}>
                <a href={link} target="_blank" rel={"noopener noreferrer"} >
                    {
                        (isImageButton) && <img style={imgStyle} src={image} alt={alt}/>
                    }
                    {
                        (isTextButton) && <text> {text} </text>
                    }
                </a>
            </div>
        )
    }
}

