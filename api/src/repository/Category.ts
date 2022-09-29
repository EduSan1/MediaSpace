import { AppDataSource } from "../data-source"
import { CategoryORM } from "../entity/Category"

export class CategoryRepository {
    private _ : any

    constructor() {
        this._ = AppDataSource.getRepository(CategoryORM)
    }

    create = async (entity : any) => {
        return await this._.save(entity)
    }

    list = async () => {
        return await this._.find(CategoryORM)
    }

    listWhere =  async (key: keyof typeof CategoryORM, value: any) => {
        return await this._.find({
            where :  {
                [key] : value
            }
        })
    }


    findByWhere =  async (key: keyof typeof CategoryORM, value: any) => {
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

    update = async (entity : any) => {
        return await this._.save(entity)
    }

    remove = async (id : string) => {
        return await this._.delete({ id })
    }
}