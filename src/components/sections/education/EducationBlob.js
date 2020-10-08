import React, {Component} from 'react'
import {educationData} from '../../../data/education'
import './Education.css'

const images = require.context('../../../res/img/edu', true);

export default class EducationBlob extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            key: props.id
        }
    }

    render() {

        let object = educationData[this.state.key]
        let image = images(`./${this.state.key}.png`)
        let date = object['date']
        let name = object['name']
        let grade = object['grade']
        let course = object['course']
        let description = object['description']

        return(
            <div className={"EducationBlob"}>
                <div id={"BlobImage"}>
                    <img src={image}/>
                </div>

                <div id={"BlobContent"}>
                    <h1>{name}</h1> <i>({date})</i>
                    <h2>{course}, <br/> {grade}</h2>
                    <p>
                        {
                            description.split('\n\n').map((item, i) => {
                                return <p key={i}> {item} </p>
                            })
                        }
                    </p>
                </div>
            </div>
        );
    }
}
