import { CategoryORM } from "../entity/Category"
import { SubCategoryORM } from "../entity/SubCategory"
import { UserTeamORM } from "../entity/UserTeam"
import { IDomainTeamProps } from "../interface/Team"

export class TeamDomain {
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

    constructor(props : IDomainTeamProps) {
        this.id = props.id
        this.name = props.name
        this.nickname = props.nickname
        this.description = props.description
        this.profile_picture = props.profile_picture
        this.general_evaluation = props.general_evaluation
        this.status = props.status
        this.is_active = props.is_active
        this.is_personal = props.is_personal
        this.teamUser = props.teamUser
        this.categories = props.categories
        this.sub_categories = props.sub_categories
    }
}