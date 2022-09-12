import { GenderORM } from "../entity/Gender"
import { PhoneORM } from "../entity/Phone"

export interface IDomainUserProps {
    id : string
    first_name : string
    last_name : string
    nickname: string
    birth_date: string
    cpf: string
    mail: string
    password: string
    biography: string
    profile_picture: string
    is_active: boolean
    is_authenticated: boolean
    gender : GenderORM
    phones : PhoneORM[]
}