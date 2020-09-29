import Project from './models/Project.js'
import {projectsData} from './projects'

var HashMap = require('hashmap')

export default class ProjectRepository {

    // eslint-disable-next-line no-undef
    static tagMap = new HashMap()
    static filterTags = new HashMap()
    static projectsMap = new HashMap()

    static getProjectById(id) {
        if(this.projectsMap.size === 0) {
            console.warn("Attempt to access empty hashmap")
        }

        return this.projectsMap.get(id)
    }

    static getProjects() {

        // if already calculated, return copy
        if(this.projectsMap.size !== 0) {
            return this.projectsMap.values()
        }

        let projects = []

        // sort by new - old
        projects.sort(function (a, b) {
            return b.endDate - a.endDate
        })

        // add all projects to map + array
        for(const x in projectsData) {
            const project = new Project(null, projectsData[x])

            this.projectsMap.set(project.id, project)
            projects.push(project)
        }

        // add all tags to a map
        projects.forEach((project, _) => { this.addTagsFromProject(project) })

        return projects
    }

    static addTagsFromProject(project) {
        for(const index in project.tags) {

            // get tag as string from project
            let tag = project.tags[index]

            // get current value
            let value = this.tagMap.get(tag)

            if(value == null) {
                this.tagMap.set(tag, [])

                // set in selected tags map
                this.filterTags.set(tag, true)

                // reassign value if null'd
                value = []
            }

            value.push(project)

            this.tagMap.set(tag, value)
        }
    }

    static filterTag(tag, enabled) {

        console.log(`\tSetting ${tag} in repo to ${enabled}`)


        this.filterTags.set(tag, enabled)

        if(tag === "Android (Java/Kotlin)") {
            this.filterTags.set("Java", enabled)
            this.filterTags.set("Kotlin", enabled)
        }
    }

    static populate() {
        this.getProjects()
    }
}
