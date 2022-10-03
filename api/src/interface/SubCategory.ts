import { CategoryORM } from "../entity/Category"
import { TeamORM } from "../entity/team"

export interface IDomainSubCategoryProps {
    id : string
    name: string
    is_active: boolean
    category: CategoryORM
    teams: TeamORM[]
}