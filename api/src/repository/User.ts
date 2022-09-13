import { AppDataSource } from "../data-source"
import { UserORM } from "../entity/User"

export class UserRepository {

    private _ : any

    constructor() {
        this._ = AppDataSource.getRepository(UserORM)
    }

    create = async (entity : any) => {
        return await this._.save(entity)
    }

    list = async () => {
        return await this._.find(UserORM)
    }

    listByMail = async (mail : string) => {
        return await this._.findOne({
            where :  {
                mail
            }
        })
    }
    listByVar = async (atributo : string ,varr : string) => {
        return await this._.findOne({
            where :  {
                [atributo] : varr
            }
        })
    }

    listById = async (id : string) => {
        return await this._.findOne({
            where :  {
                id
            }
        })
    }

    update = async (entity : any) => {
        return await this._.save(entity)
    }

    remove = async (id : string) => {
        return await this._.delete({ id })
    }
}