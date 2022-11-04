import { AppDataSource } from "../data-source"
import CategoryDomain from "../domain/Category"
import { CategoryORM } from "../entity/Category"

export class CategoryRepository {
    private _: any

    constructor() {
        this._ = AppDataSource.getRepository(CategoryORM)
    }

    create = async (entity: CategoryDomain) => {
        return await this._.save(entity)
    }

    list = async () => {
        return await this._.find({
            relations: {
                sub_categories: true
            }
        })
    }

    listWhere = async (key: keyof typeof CategoryORM, value: any) => {
        return await this._.find({
            where: {
                [key]: value
            },
            relations: {
                sub_categories: true
            }
        })
    }


    findByWhere = async (key: keyof typeof CategoryORM, value: any) => {
        return await this._.findOne({
            where: {
                [key]: value
            },
            relations: {
                sub_categories: true
            }
        })
    }

    findById = async (id: string) => {
        return await this._.findOne({
            where: {
                id
            },
            relations: {
                sub_categories: true
            }
        })
    }

    update = async (entity: CategoryORM) => {
        return await this._.save(entity)
    }

    remove = async (id: string) => {
        return await this._.delete({ id })
    }
}