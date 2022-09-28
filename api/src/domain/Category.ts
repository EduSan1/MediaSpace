import { SubCategoryORM } from "../entity/SubCategory"
import { IDomainCategoryProps } from "../interface/Category"

export default class CategoryDomain {

    id : string
    name: string
    icon: string
    subCategory: SubCategoryORM[]


    constructor(props : IDomainCategoryProps) {
        this.id = props.id
        this.name = props.name
        this.icon = props.icon
        this.subCategory = props.subCategory

    }

}