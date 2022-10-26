import { RequirementFileORM } from "../entity/RequirementFile"

export interface IDomainDeliveryProps {

    id: string
    title: string
    description: string
    files: RequirementFileORM[]
    is_accepted: null

}