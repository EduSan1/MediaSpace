import { CategoryORM } from "../entity/Category"
import { InterestMemberORM } from "../entity/Interest"
import { ProjectAttachmentORM } from "../entity/ProjectAttachment"
import { ProjectImageORM } from "../entity/ProjectImage"
import { ProjectManagementORM } from "../entity/ProjectManagment"
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
    status: "AWAITING_START" | "IN EXECUTION" | "COMPLETE" | "CANCELED"
    user: UserORM
    categories: CategoryORM[]
    sub_categories: SubCategoryORM[]
    images: ProjectImageORM[]
    management: ProjectManagementORM[]
    interest: InterestMemberORM[]
    attachments: ProjectAttachmentORM[]

}