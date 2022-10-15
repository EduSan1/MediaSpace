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

    listWhere = async (key: keyof typeof ProjectORM, value: any) => {
        return await this._.find({
            where: {
                [key]: value
            }
        })
    }


    findByWhere = async (key: keyof typeof ProjectORM, value: any) => {
        return await this._.findOne({
            where: {
                [key]: value
            }
        })
    }

    findById = async (id: string) => {
        return await this._.findOne({
            where: {
                id
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