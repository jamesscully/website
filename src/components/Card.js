import React from 'react'
import {animated} from "react-spring";
import './Card.css'
import {Spring, config} from "react-spring/renderprops-universal";

export default class Card extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            icon: props.img,
            text: props.text,
            style: props.style
        }
    }

    render() {

        console.log(`Icon = ${this.state.icon}`)

        return(

            <Spring
                config={config.molasses}
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}>
                {props =>
                    <animated.div className="icon" style={props}>
                        <img src={this.state.icon} alt={"Test"}/>
                        <animated.div id={"textArea"} style={props}>
                            {
                                this.state.text.split('\n').map((item, i) => {
                                    return <p key={i}> {item} </p>
                                })
                            }
                        </animated.div>
                    </animated.div>
                }
            </Spring>







        )
    }
}
