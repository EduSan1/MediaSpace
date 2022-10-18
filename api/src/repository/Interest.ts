import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { InterestORM } from "../entity/Interest";

export class InterestRepository {
    private _: any

    constructor() {
        this._ = AppDataSource.getRepository(InterestORM)
    }

    create = async (entity: any) => {
        return await this._.save(entity)
    }
}