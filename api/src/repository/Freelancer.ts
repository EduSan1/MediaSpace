import { Like, Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { TeamDomain } from "../domain/Team"
import { TeamORM } from "../entity/Team"

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
        return await this._.findAndCount({
            where:
                [[
                    {
                        name: Like('%' + search + '%'),
                        // categories: [{ id: Like('%' + categories[1] + '%') },
                        // { id: Like('%' + categories[0] + '%') }],
                        // categories:
                        //     { id: categories[0] },
                        categories: categories.map((category: string) => { return { id: category } }),
                    }
                ],
                // [
                //     { nickname: Like('%' + search + '%') },
                //     { categories: { name: "Arte" } }

                {
                    nickname: Like('%' + search + '%'),
                    // categories: [{ id: Like('%' + categories[1] + '%') },
                    // { id: Like('%' + categories[0] + '%') }],
                    // categories:
                    //     { id: categories[0] },
                    categories: categories.map((category: string) => { return { id: category } }),
                }
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