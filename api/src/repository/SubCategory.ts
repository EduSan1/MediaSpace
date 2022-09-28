import { AppDataSource } from "../data-source"
import { SubCategoryORM } from "../entity/SubCategory"

export class SubCategoryRepository {
    private _ : any

    constructor() {
        this._ = AppDataSource.getRepository(SubCategoryORM)
    }

    create = async (entity:any) => {
        return await this._.save(entity)
    }
}