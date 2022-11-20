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

    findById = async (id: string) => {
        return await this._.findOne({
            where: {
                id
            },
            relations: {
                teamProjectManagement: true,
                member: true
            }
        })
    }

}