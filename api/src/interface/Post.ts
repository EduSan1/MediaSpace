import { CategoryORM } from "../entity/Category"
import { PostImageORM } from "../entity/PostImage"
import { SubCategoryORM } from "../entity/SubCategory"
import { TeamORM } from "../entity/Team"

export interface IDomainPostProps {
    id: string
    title: string
    description: string
    team: TeamORM
    categories: CategoryORM[]
    sub_categories: SubCategoryORM[]
}