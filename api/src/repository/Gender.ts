import { AppDataSource } from "../data-source";
import { GenderORM } from "../entity/Gender";

export class genderRepository {
    
    private _ : any

    constructor() {
        this._ = AppDataSource.getRepository(GenderORM)
    }

    create = async (entity : any) => {
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

    update = async (entity : any) => {
        return await this._.save(entity)
    }

    remove = async (id : string) => {
        return await this._.delete({ id })
    }
}