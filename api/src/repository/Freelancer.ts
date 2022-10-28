import { Like, Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { TeamDomain } from "../domain/Team"
import { TeamORM } from "../entity/team"

export class FreelancerRepository {
    private _: any

    constructor() {
        this._ = AppDataSource.getRepository(TeamORM)
    }

    create = async (entity: any) => {
        return await this._.save(entity)
    }

    list = async () => {
        return await this._.find(TeamORM)
    }

    listWhere = async (key: keyof typeof TeamORM, value: string) => {
        return await this._.find({
            where: {
                [key]: value
            }
        })
    }

    findByWhere = async (key: keyof typeof TeamORM, value: string) => {
        return await this._.findOne({
            where: {
                [key]: value
            }
        })
    }

    listPageCategories = async (take: number, skip: number, search: string, categories: any) => {
        console.log(categories[1])
        return await this._.findAndCount({
            where:
                [[
                    {
                        name: Like('%' + search + '%'),
                        categories: [{ name: Like('%' + categories[1] + '%') }]
                    }
                ],
                    // [
                    //     { nickname: Like('%' + search + '%') },
                    //     { categories: { name: "Arte" } }
                    // ]
                ],
            take: take,
            skip: skip

        })
    }

    findById = async (id: string) => {
        return await this._.findOne({
            where: {
                id
            }
        })
    }

    update = async (entity: TeamORM) => {
        return await this._.save(entity)
    }

    remove = async (id: string) => {
        return await this._.delete({ id })
    }
}