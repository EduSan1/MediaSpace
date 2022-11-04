import { ProjectORM } from "../entity/Project"
import { DeliveryORM } from "../entity/Delivery"
import { IDomainProjectRequirementsProps } from "../interface/ProjectRequirements"

export default class ProjectRequirementsDomain {

    id:              string
    title:           string
    description:     string
    gain_percentage: number
    is_accepted:     null
    is_delivered:    null
    project:         ProjectORM
    delivery:        DeliveryORM[]

    constructor(props: IDomainProjectRequirementsProps) {
        this.id              = props.id
        this.title           = props.title
        this.description     = props.description
        this.gain_percentage = props.gain_percentage
        this.is_accepted     = props.is_accepted
        this.is_delivered    = props.is_delivered
        this.project         = props.project
        this.delivery        = props.delivery
    }

}