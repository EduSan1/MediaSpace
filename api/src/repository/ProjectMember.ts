import { AppDataSource } from "../data-source";
import { ProjectMemberORM } from "../entity/ProjectMember";

export class ProjectMemberRepository {
    private _: any

    constructor() {
        this._ = AppDataSource.getRepository(ProjectMemberORM)
    }

    create = async (entity: any) => {
        return await this._.save(entity)
    }

    update = async (entity: ProjectMemberORM) => {
        return await this._.save(entity)
    }
}