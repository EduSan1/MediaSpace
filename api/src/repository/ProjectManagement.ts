import { AppDataSource } from "../data-source";
import { ProjectManagementORM } from "../entity/ProjectManagement";

export class ProjectManagementRepository {
    private _: any

    constructor() {
        this._ = AppDataSource.getRepository(ProjectManagementORM)
    }

    create = async (entity: any) => {
        return await this._.save(entity)
    }

    update = async (entity: ProjectManagementORM) => {
        return await this._.save(entity)
    }

    getById = async (id: string) => {
        return await this._.findOne({
            where: {
                id
            },
            relations: {
                team_project_management: true,
                members: true

            }
        })
    }
}