import { GenderORM } from "../entity/Gender"
import { PhoneORM } from "../entity/Phone"
import { IDomainUserProps } from "../interface/User"

export default class UserDomain {
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
    phone : PhoneORM

    constructor(props : IDomainUserProps) {
        this.id = props.id
        this.first_name = props.first_name
        this.last_name = props.last_name
        this.nickname = props.nickname
        this.birth_date = props.birth_date
        this.cpf = props.cpf
        this.mail = props.mail
        this.password = props.password
        this.biography = props.biography
        this.profile_picture = props.profile_picture
        this.is_active = props.is_active
        this.is_authenticated = props.is_authenticated
        this.gender = props.gender
        this.phone = props.phone
    }
}