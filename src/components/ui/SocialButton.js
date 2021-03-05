import React, {Component} from "react";

import './SocialButton.css'

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
                        (isImageButton) && <img className={"social-button-size"} src={image} alt={alt}/>
                    }
                    {
                        (isTextButton) && <text> {text} </text>
                    }
                </a>
            </div>
        )
    }
}

