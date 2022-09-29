import { SubCategoryORM } from "../entity/SubCategory"

export interface IDomainCategoryProps {
    id : string
    name: string
    icon: string
    is_active: boolean
    subCategory: SubCategoryORM[]

}