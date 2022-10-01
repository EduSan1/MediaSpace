import { SubCategoryORM } from "../entity/SubCategory"
import { TeamORM } from "../entity/team"

export interface IDomainCategoryProps {
    id : string
    name: string
    icon: string
    is_active: boolean
    subCategory: SubCategoryORM[]
    teams: TeamORM[]

}