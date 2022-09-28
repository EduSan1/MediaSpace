import { CategoryORM } from "../entity/Category"
import { IDomainSubCategoryProps } from "../interface/SubCategory"

export default class SubCategoryDomain {

    id : string
    name: string
    category : CategoryORM



    constructor(props : IDomainSubCategoryProps) {
        this.id = props.id
        this.name = props.name
        this.category = props.category


    }

}