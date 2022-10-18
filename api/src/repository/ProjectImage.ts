import { AppDataSource } from "../data-source"
import { ProjectImageORM } from "../entity/ProjectImage"

export class ProjectImageRepository {
    private _: any

    constructor() {
        this._ = AppDataSource.getRepository(ProjectImageORM)
    }

    create = async (entity: any) => {
        return await this._.save(entity)
    }

    list = async () => {
        return await this._.find(ProjectImageORM)
    }
}