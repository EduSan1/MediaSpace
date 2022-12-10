import { Like } from "typeorm"
import { AppDataSource } from "../data-source"
import PostDomain from "../domain/Post"
import ProjectDomain from "../domain/Project"
import { PostORM } from "../entity/Post"

export class PostRepository {
    private _: any

    constructor() {
        this._ = AppDataSource.getRepository(PostORM)
    }

    create = async (entity: PostDomain) => {
        return await this._.save(entity)
    }

    list = async () => {
        return await this._.find(PostORM)
    }

    listPerPage = async (take: number, skip: number, search: string, categories: any) => {
        return await this._.findAndCount({
            where:
                [[
                    {
                        is_active: true,
                        title: Like('%' + search + '%'),
                        categories: categories.map((category: string) => { return { id: category } }),
                    }
                ]
                ],
            take: take,
            skip: skip,

            relations: {
                categories: true,
                sub_categories: true,
                images: true,
                team: true
            }
        })
    }


    listWhere = async (key: keyof typeof PostORM, value: string) => {
        return await this._.find({
            where: {
                [key]: value
            }
        })
    }

    getByWhere = async (key: keyof typeof PostORM, value: string) => {
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
                categories: true,
                sub_categories: true,
                images: true,
            }
        })
    }

    update = async (entity: PostORM) => {
        return await this._.save(entity)
    }

    remove = async (id: string) => {
        return await this._.delete({ id })
    }
}