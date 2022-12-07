import { CategoryORM } from "../entity/Category"
import { PostImageORM } from "../entity/PostImage"
import { SubCategoryORM } from "../entity/SubCategory"
import { TeamORM } from "../entity/Team"
import { IDomainPostProps } from "../interface/Post"

export default class PostDomain {

    id: string
    title: string
    description: string
    team: TeamORM
    categories: CategoryORM[]
    sub_categories: SubCategoryORM[]
    images: PostImageORM[]

    constructor(props: IDomainPostProps) {
        this.id = props.id
        this.title = props.title
        this.description = props.description
        this.categories = props.categories
        this.sub_categories = props.sub_categories
        this.team = props.team
    }
}