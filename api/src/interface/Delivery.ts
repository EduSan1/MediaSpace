import { ProjectRequirementsORM } from "../entity/ProjectRequirements"
import { DeliveryFileORM } from "../entity/DeliveryFile"
import { UserORM } from "../entity/User"

export interface IDomainDeliveryProps {

    id: string
    title: string
    description: string
    files: DeliveryFileORM[]
    is_accepted: null
    requirements: ProjectRequirementsORM[]
    user: UserORM[]

}