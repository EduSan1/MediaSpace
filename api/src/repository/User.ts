import { AppDataSource } from "../data-source"
import UserDomain from "../domain/User"
import { TeamORM } from "../entity/team"
import { UserORM } from "../entity/User"

export class UserRepository {

    private _ : any

    constructor() {
        this._ = AppDataSource.getRepository(UserORM)
    }

    create = async (entity : UserDomain) => {
        return await this._.save(entity)
    }

    list = async () => {
        return await this._.find(UserORM)
    }

    listWhere =  async (key:  keyof typeof UserORM | keyof typeof TeamORM, value: any) => {
        return await this._.find({
            where :  {
                [key] : value
            }
        })
    }


    findByWhere =  async (key: keyof typeof UserORM | keyof typeof TeamORM, value: any) => {
        return await this._.findOne({
            where :  {
                [key] : value
            }
        })
    }

    findById = async (id : string) => {
        return await this._.findOne({
            where :  {
                id
            }
        })
    }

    update = async (entity : UserORM) => {
        return await this._.save(entity)
    }

    remove = async (id : string) => {
        return await this._.delete({ id })
    }
}