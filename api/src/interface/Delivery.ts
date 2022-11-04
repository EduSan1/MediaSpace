import { ProjectRequirementsORM } from "../entity/ProjectRequirements"
import { DeliveryFileORM } from "../entity/DeliveryFile"

export interface IDomainDeliveryProps {

    id: string
    title: string
    description: string
    files: DeliveryFileORM[]
    is_accepted: null
    requirements: ProjectRequirementsORM[]

}