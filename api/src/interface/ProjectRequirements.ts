import { ProjectORM } from "../entity/Project"
import { DeliveryORM } from "../entity/Delivery"

export interface IDomainProjectRequirementsProps {

    id: string
    title: string
    description: string
    gain_percentage: number
    is_accepted: null
    // is_delivered: null
    project: ProjectORM
    delivery: DeliveryORM[]
}