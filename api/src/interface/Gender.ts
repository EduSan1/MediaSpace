import { UserORM } from "../entity/User"

export interface IDomainGenderProps {

    id: string
    gender: string
    users: UserORM[]

}