import { SubCategoryORM } from "../entity/SubCategory"
import { IDomainCategoryProps } from "../interface/Category"

export default class CategoryDomain {

    id : string
    name: string
    icon: string
    is_active : boolean
    subCategory: SubCategoryORM[]


    constructor(props : IDomainCategoryProps) {
        this.id = props.id
        this.name = props.name
        this.icon = props.icon
        this.is_active = props.is_active
        this.subCategory = props.subCategory

    }

}