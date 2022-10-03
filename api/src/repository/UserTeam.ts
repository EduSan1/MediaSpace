import { AppDataSource } from "../data-source"
import { UserTeamORM } from "../entity/UserTeam"

export class UserTeamRepository {
    private _ : any

    constructor() {
        this._ = AppDataSource.getRepository(UserTeamORM)
    }

    create = async (entity : any) => {
        return await this._.save(entity)
    }

    findByWhere =  async (key: keyof typeof UserTeamORM, value: any) => {
        return await this._.findOne({
            where :  {
                [key] : value
            }
        })
    }

    findById = async (id : string) => {
        return await this._.findOne({
            relations: {
                user: true,
                team : true
            },
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