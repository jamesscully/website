import Project from './models/Project.js'
import { projectsData } from './projects'

export default class ProjectRepository {



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

        return projects
    }
}
