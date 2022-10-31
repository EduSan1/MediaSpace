import { AppDataSource } from "../data-source"
import ProjectRequirementsDomain from "../domain/ProjectRequirements"
import { ProjectRequirementsORM } from "../entity/ProjectRequirements"

export class ProjectRequirementsRepository {
    private _: any

    constructor() {
        this._ = AppDataSource.getRepository(ProjectRequirementsORM)
    }

    create = async (entity: ProjectRequirementsDomain) => {
        return await this._.save(entity)
    }

    list = async () => {
        return await this._.find(ProjectRequirementsORM)
    }

    listWhere = async (key: keyof typeof ProjectRequirementsORM, value: string) => {
        return await this._.find({
            where: {
                [key]: value
            }
        })
    }

    findByWhere = async (key: keyof typeof ProjectRequirementsORM, value: string) => {
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
            },
            relations: {
                project: false,
                delivery: true
            }
        })
    }

    update = async (entity: ProjectRequirementsORM) => {
        return await this._.save(entity)
    }

    delete = async (id: string) => {
        return await this._.delete({ id })
    }

}

