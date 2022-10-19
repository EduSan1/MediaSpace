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
}

