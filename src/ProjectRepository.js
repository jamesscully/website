import Project from './models/Project.js'
import { projectsData } from './projects'

var LinkedList = require('linked-list')
var HashMap = require('hashmap')

export default class ProjectRepository {

    // eslint-disable-next-line no-undef
    static hmap = new HashMap()

    // eslint-disable-next-line no-useless-constructor
    constructor() {

    }

    static getProjects() {

        let projects = []

        console.log(projectsData)

        for(const x in projectsData) {
            const project = new Project(projectsData[x])

            projects.push(project)
        }

        for (const p in projects) {
            console.log(projects[p])
        }

        projects.sort(function (a, b) {
            return b.endDate - a.endDate
        })

        for(let i = 0; i < projects.length; i++) {
            let project = projects[i];
            this.addToHash(project)
        }

        return projects
    }

    static addToHash(project) {
        for(var index in project.tags) {

            // get tag as string from project
            let tag = project.tags[index]

            // get current value
            let value = this.hmap.get(tag)

            if(value == null) {
                console.log(`Found null entry for ${tag}`)
                this.hmap.set(tag, [])
                // reassign value if null'd
                value = []
            }

            console.log(`Adding ${tag.toString()} to HMap`)

            value.push(project)

            this.hmap.set(tag, value)
        }
    }
}
