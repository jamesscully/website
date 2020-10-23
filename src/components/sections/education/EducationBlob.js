import React, {Component} from 'react'
import {EducationData} from '../../../data/education'
import './Education.css'
import {animated, Spring} from "react-spring/renderprops";
import Button from "../../Button";

const images = require.context('../../../res/img/edu', true);


export default class EducationBlob extends Component {
    constructor(props) {
        super(props);

        this.state = {
            identifier: props.id,
            expanded: false,
            modules: false
        }
    }

    onToggle = () => {
        this.setState(state => ({expanded: !state.expanded}))
        console.log(`Expanded: ${this.state.expanded}`)
    }

    render() {
        let object = EducationData[this.state.identifier]
        let image = images(`./${this.state.identifier}.png`)
        let date = object['date']
        let name = object['name']
        let grade = object['grade']
        let course = object['course']
        let description = object['description']

        const { expanded } = this.state


        // update text for expansion of blob
        let buttonText = "Expand";

        if(expanded) {
            buttonText = "Collapse"
            console.log(`${buttonText}`)
        }


        const text = description.split('\n\n')

        return(
            <div className={"EducationBlob"}>
                <div id={"BlobImage"}>
                    <img src={image} alt={"Logo"}/>
                </div>

                <div className={"BlobContent"}>
                    <span id={"institution"}>
                        {name}
                        <span id={"date"}>
                            Graduated {date}
                        </span>
                    </span>

                    <span id={"course"}>
                        {course}, <br/>
                        <span id={"grade"}> {grade} </span>
                    </span>

                    <Spring
                        native
                        force
                        config={{ tension: 2500, friction: 200, precision: 1 }}
                        from={{
                            height: expanded ? 0 : 'auto',
                            opacity: expanded ? 0 : 1,
                        }}

                        to={{
                            height: expanded ? 'auto' : 0,
                            opacity: expanded ? 1 : 0,
                        }}
                    >
                        {
                            props => (
                                <animated.div className={"item"}  style={props}>
                                    {
                                        text.map((item, i) => {
                                            return <animated.p key={i} > {item} </animated.p>
                                        })
                                    }
                                    <br style={props}/>
                                </animated.div>
                            )
                        }
                    </Spring>


                    <Button
                        text={"Expand"}
                        altText={"Collapse"}
                        onClick={this.onToggle}
                        className={'flex-end float-right button_expand'}
                        iconName={'drop'}
                        inverted={this.state.expanded}
                    />

                </div>
            </div>
        );
    }
}