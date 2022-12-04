import { SubCategoryORM } from "../entity/SubCategory"
import { TeamORM } from "../entity/Team"

export interface IDomainCategoryProps {
    id: string
    name: string
    icon: string
    is_active: boolean
    sub_categories: SubCategoryORM[]
    teams: TeamORM[]

}