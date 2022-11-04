import { AppDataSource } from "../data-source"
import { DeliveryFileORM } from "../entity/DeliveryFile"

export class DeliveryFileRepository {
    private _: any

    constructor() {
        this._ = AppDataSource.getRepository(DeliveryFileORM)
    }

    create = async (entity: any) => {
        return await this._.save(entity)
    }

    list = async () => {
        return await this._.find(DeliveryFileORM)
    }
}