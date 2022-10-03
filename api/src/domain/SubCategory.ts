import { CategoryORM } from "../entity/Category"
import { IDomainSubCategoryProps } from "../interface/SubCategory"

export default class SubCategoryDomain {

    id : string
    name: string
    is_active: boolean
    category : CategoryORM

    constructor(props : IDomainSubCategoryProps) {
        this.id = props.id
        this.name = props.name
        this.is_active = props.is_active
        this.category = props.category


    }

}