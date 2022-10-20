import { ProjectORM } from "../entity/Project"

export interface IDomainProjectRequirementsProps {

    id: string
    title: string
    description: string
    gain_percentage: number
    is_accepted: null
    project: ProjectORM
}