import * as React from "react";

export default class Project extends React.Component {

    constructor(props, json_object) {
        super(props);

        // let project = ProjectRepository.getProjectById(props.id)

        this.id = json_object.id
        this.title = json_object.title
        this.imageURL = json_object.imageURL
        this.imageText = json_object.imageText
        this.startDate = json_object.startDate
        this.endDate = json_object.endDate
        this.description = json_object.description
        this.tags = json_object.tags
        this.stack = json_object.stack
        this.github = json_object.github
        this.pageContent = json_object.pageContent


        this.state = {
            hidden: false
        }

    }

    hasTag(tag) {
        return this.tags.includes(tag)
    }

    getTimeSpan() {
        if(this.startDate === this.endDate) {
            return this.startDate.toString()
        }

        let end = this.endDate

        if(end === 0) {
            end = "Ongoing"
        }

        return `${this.startDate} - ${end}`
    }


}
