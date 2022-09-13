import { AppDataSource } from "../data-source";
import { PhoneORM } from "../entity/Phone";

export class PhoneRepository {

    private _ : any

    constructor() {
        this._ = AppDataSource.getRepository(PhoneORM)
    }

    create = async (entity : any) => {
        return await this._.save(entity)
    }

    list = async () => {
        return await this._.find(PhoneORM)
    }
    
    listById = async (id : string) => {
        return await this._.findOne({
            where :  {
                id
            }
        })
    }

    update = async (entity : PhoneORM) => {
        return await this._.save(entity)
    }

    remove = async (id : string) => {
        return await this._.delete({ id })
    }
}