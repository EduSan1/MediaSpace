import { SubCategoryORM } from "../entity/SubCategory"

export interface IDomainCategoryProps {
    id : string
    name: string
    icon: string
    subCategory: SubCategoryORM[]

}