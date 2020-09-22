class Project {
    constructor(json_string) {
        console.log("Found project: " + json_string)
        let json = JSON.parse(json_string)

        this.title = json.title
        this.startDate = json.startDate

    }
}

module.exports = Project
