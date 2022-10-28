import { ProjectRequirementsORM } from "../entity/ProjectRequirements"
import { DeliveryFileORM } from "../entity/DeliveryFile"
import { IDomainDeliveryProps } from "../interface/Delivery"

export default class DeliveryDomain {

    id: string
    title: string
    description: string
    files: DeliveryFileORM[]
    is_accepted: null
    requirement: ProjectRequirementsORM

    constructor(props: IDomainDeliveryProps) {
        this.id = props.id
        this.title = props.title
        this.description = props.description
        this.files = props.files
        this.is_accepted = props.is_accepted
        this.requirement = props.requirement

    }
}