import { UserORM } from "../entity/User"
import { IDomainGenderProps } from "../interface/Gender"

export default class GenderDomain {

    id: string
    gender: string
    users: UserORM[]

    constructor(props : IDomainGenderProps) {
        this.id = props.id
        this.gender = props.gender
        this.users = props.users

    }

}