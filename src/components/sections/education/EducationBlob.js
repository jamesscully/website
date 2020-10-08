import React, {Component} from 'react'
import {educationData} from '../../../data/education'

export default class EducationBlob extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                {educationData[0].description}
                {console.log(educationData[0].description)}
            </div>
        );
    }
}
