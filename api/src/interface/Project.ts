import { CategoryORM } from "../entity/Category"
import { InterestORM } from "../entity/Interest"
import { ProjectImageORM } from "../entity/ProjectImage"
import { ProjectManagementORM } from "../entity/ProjectManagement"
import { ProjectRequirementsORM } from "../entity/ProjectRequirements"
import { SubCategoryORM } from "../entity/SubCategory"
import { UserORM } from "../entity/User"

export interface IDomainProjectProps {

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
    requirements: ProjectRequirementsORM[]

}