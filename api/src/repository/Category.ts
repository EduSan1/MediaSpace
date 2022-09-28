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
}