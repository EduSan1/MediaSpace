import { AppDataSource } from "../data-source"

import { PostImageORM } from "../entity/PostImage"

export class PostImageRepository {
    private _: any

    constructor() {
        this._ = AppDataSource.getRepository(PostImageORM)
    }

    create = async (entity: any) => {
        return await this._.save(entity)
    }

    list = async () => {
        return await this._.find(PostImageORM)
    }
}