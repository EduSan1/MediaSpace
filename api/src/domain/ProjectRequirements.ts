import { ProjectORM } from "../entity/Project"
import { IDomainProjectRequirementsProps } from "../interface/ProjectRequirements"

export default class ProjectRequirementsDomain {

    id:              string
    title:           string
    description:     string
    gain_percentage: number
    is_accepted:     boolean
    project:         ProjectORM

    constructor(props: IDomainProjectRequirementsProps) {
        this.id              = props.id
        this.title           = props.title
        this.description     = props.description
        this.gain_percentage = props.gain_percentage
        this.is_accepted     = props.is_accepted
        this.project         = props.project
    }

}