import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { MemberORM } from "../entity/Member";

export class MemberRepository {
    private _: any

    constructor() {
        this._ = AppDataSource.getRepository(MemberORM)
    }

    create = async (entity: any) => {
        return await this._.save(entity)
    }

    update = async (entity: MemberORM) => {
        return await this._.save(entity)
    }
}