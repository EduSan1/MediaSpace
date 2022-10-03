import { AppDataSource } from "../data-source"
import SubCategoryDomain from "../domain/SubCategory"
import { SubCategoryORM } from "../entity/SubCategory"

export class SubCategoryRepository {
    private _ : any

    constructor() {
        this._ = AppDataSource.getRepository(SubCategoryORM)
    }

    create = async (entity : SubCategoryDomain) => {
        return await this._.save(entity)
    }

    list = async () => {
        return await this._.find(SubCategoryORM)
    }

    listWhere =  async (key: keyof typeof SubCategoryORM, value: any) => {
        return await this._.find({
            where :  {
                [key] : value
            }
        })
    }

    findByWhere =  async (key: keyof typeof SubCategoryORM, value: any) => {
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

    update = async (entity : SubCategoryORM) => {
        return await this._.save(entity)
    }

    remove = async (id : string) => {
        return await this._.delete({ id })
    }
}