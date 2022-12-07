import { Like } from "typeorm"
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
        return await this._.find({
            where: {
                status: "AWAITING_START"
            },
            relations: {
                user: true,
                requirements: true,
                management: true,
            }
        })
    }

    listPerPage = async (take: number, skip: number, search: string, categories: any) => {
        return await this._.findAndCount({
            where:

            {
                status: "AWAITING_START",
                is_active: true,
                name: Like('%' + search + '%'),
                categories: categories.map((category: string) => { return { id: category } }),
            },


            relations: {
                user: true,
            },
            take: take,
            skip: skip
        })
    }

    listWhere = async (key: any, value: any) => {
        return await this._.find({
            where: {
                [key]: value
            },
            relations: {
                management: true
            }
        })
    }

    getByWhere = async (key: any, value: any) => {
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
                requirements: {
                    delivery: true
                },
                management: {
                    team_project_management: {
                        team: true
                    }
                },
                user: true,

            },
            order: {

                requirements: {

                    create_at: "ASC"
                }

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