import { AppDataSource } from "../data-source";
import GenderDomain from "../domain/Gender";
import { GenderORM } from "../entity/Gender";

export class GenderRepository {
    
    private _ : any

    constructor() {
        this._ = AppDataSource.getRepository(GenderORM)
    }

    create = async (entity : GenderDomain) => {
        return await this._.save(entity)
    }

    list = async () => {
        return await this._.find(GenderORM)
    }

    listById = async (id : string) => {
        return await this._.findOne({
            where :  {
                id
            }
        })
    }

    update = async (entity : GenderORM) => {
        return await this._.save(entity)
    }

    remove = async (id : string) => {
        return await this._.delete({ id })
    }
}