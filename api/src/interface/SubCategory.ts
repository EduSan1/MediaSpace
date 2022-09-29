import { CategoryORM } from "../entity/Category"

export interface IDomainSubCategoryProps {
    id : string
    name: string
    is_active: boolean
    category: CategoryORM

}