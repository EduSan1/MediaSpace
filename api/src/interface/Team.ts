import { CategoryORM } from "../entity/Category"
import { SubCategoryORM } from "../entity/SubCategory"
import { UserTeamORM } from "../entity/UserTeam"

export interface IDomainTeamProps {
    id: string
    name : string
    nickname : string
    description : string
    profile_picture : string
    general_evaluation : number
    status : boolean
    is_active : boolean
    is_personal : boolean
    teamUser : UserTeamORM[]
    categories : CategoryORM[]
    sub_categories : SubCategoryORM[]
}