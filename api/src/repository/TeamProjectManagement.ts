import { AppDataSource } from "../data-source";
import { TeamProjectManagementORM } from "../entity/TeamProjectManagement";

export class TeamProjectManagementRepository {
    private _: any

    constructor() {
        this._ = AppDataSource.getRepository(TeamProjectManagementORM)
    }

    create = async (entity: any) => {
        return await this._.save(entity)
    }

    update = async (entity: TeamProjectManagementORM) => {
        return await this._.save(entity)
    }

    getById = async (id: string) => {
        return await this._.findOne({
            where: {
                id
            },
            relations: {
                members: true,
                team: true

            }
        })
    }

    getAllByFreelancerId = async (freelancerId: string) => {
        return await this._.find({
            where: [{
                team: {
                    id: freelancerId
                },
                is_active: null
            }, {
                team: {
                    id: freelancerId
                },
                is_active: true
            }],
            relations: {
                projectManagement: {
                    project: {
                        user: true
                    }
                }
            }
        })
    }
}