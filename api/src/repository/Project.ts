import { AppDataSource } from "../data-source"
import ProjectDomain from "../domain/Project"
import { ProjectORM } from "../entity/Project"

export class ProjectRepository {
    private _: any

    constructor() {
        this._ = AppDataSource.getRepository(ProjectORM)
    }

    create = async (entity: ProjectDomain) => {
        return await this._.save(entity)
    }

    list = async () => {
        return await this._.find(ProjectORM)
    }

    listWhere = async (key: keyof typeof ProjectORM, value: string) => {
        return await this._.find({
            where: {
                [key]: value
            }
        })
    }

    getByWhere = async (key: keyof typeof ProjectORM, value: string) => {
        return await this._.findOne({
            where: {
                [key]: value
            }
        })
    }

    getById = async (id: string) => {
        return await this._.findOne({
            where: {
                id
            },
            relations: {
                interest: true,
                sub_categories: true,
                attachments: true,
                requirements: true
            }
        })
    }

    update = async (entity: ProjectORM) => {
        return await this._.save(entity)
    }

    remove = async (id: string) => {
        return await this._.delete({ id })
    }
}