import { CategoryORM } from "../entity/Category"
import { InterestORM } from "../entity/Interest"
import { ProjectImageORM } from "../entity/ProjectImage"
import { ProjectManagementORM } from "../entity/ProjectManagement"
import { SubCategoryORM } from "../entity/SubCategory"
import { UserORM } from "../entity/User"
import { IDomainProjectProps } from "../interface/Project"

export default class ProjectDomain {

    id: string
    name: string
    description: string
    estimated_value: number
    estimated_deadline: Date
    finish_project_date: Date
    start_project_date: Date
    status: "AWAITING_START" | "VALIDATING_REQUIREMENTS" | "IN EXECUTION" | "COMPLETE" | "CANCELED"
    user: UserORM
    categories: CategoryORM[]
    sub_categories: SubCategoryORM[]
    images: ProjectImageORM[]
    management: ProjectManagementORM[]
    interest: InterestORM[]



    constructor(props: IDomainProjectProps) {
        this.id = props.id
        this.name = props.name
        this.description = props.description
        this.estimated_value = props.estimated_value
        this.estimated_deadline = props.estimated_deadline
        this.finish_project_date = props.finish_project_date
        this.start_project_date = props.start_project_date
        this.status = props.status
        this.user = props.user
        this.categories = props.categories
        this.sub_categories = props.sub_categories
        this.images = props.images
        this.management = props.management
        this.interest = props.interest


    }
}