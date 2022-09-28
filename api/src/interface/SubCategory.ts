import { CategoryORM } from "../entity/Category"

export interface IDomainSubCategoryProps {
    id : string
    name: string
    category: CategoryORM

}