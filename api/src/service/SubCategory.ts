import { SubCategoryRepository } from "../repository/SubCategory";

export class SubCategoryService {
    private _ : SubCategoryRepository

    constructor(repo : SubCategoryRepository) {
        this._ = repo
    }

    create = async (entity : any) => {
        try {
            return await this._.create(entity)
        }catch (error) {
            return {
                message: error.message,
                error: error.code,
                statusCode : 400
            }
        }
    }

}