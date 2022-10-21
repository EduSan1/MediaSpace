import { AppDataSource } from "../data-source"
import { ProjectAttachmentORM } from "../entity/ProjectAttachment"

export class ProjectAttachmentRepository {
    private _: any

    constructor() {
        this._ = AppDataSource.getRepository(ProjectAttachmentORM)
    }

    create = async (entity: any) => {
        return await this._.save(entity)
    }

    list = async () => {
        return await this._.find(ProjectAttachmentORM)
    }
}