import { CategoryRepository } from "../repository/Category";

export class CategoryService {

    private _ : CategoryRepository

    constructor(repo : CategoryRepository) {
        this._ = repo
    }

    create = async (entity:any) => {
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