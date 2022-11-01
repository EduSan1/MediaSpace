import { AppDataSource } from "../data-source"

import { PostCommentORM } from "../entity/PostComment"

export class PostCommentRepository {
    private _: any

    constructor() {
        this._ = AppDataSource.getRepository(PostCommentORM)
    }

    create = async (entity: any) => {
        return await this._.save(entity)
    }

    getById = async (id: string) => {
        return await this._.findOne({
            where: {
                id
            }
        })
    }

    listByPost = async (postId: string) => {
        return await this._.find({
            where: {
                is_active: true,
                post: {
                    id: postId
                }
            },
            relations: {
                user: true
            }
        })
    }

    update = async (entity: PostCommentORM) => {
        return await this._.save(entity)
    }
}