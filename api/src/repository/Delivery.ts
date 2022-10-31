import { AppDataSource } from "../data-source"
import DeliveryDomain from "../domain/Delivery"
import { DeliveryORM } from "../entity/Delivery"

export class DeliveryRepository {
    private _: any

    constructor() {
        this._ = AppDataSource.getRepository(DeliveryORM)
    }

    create = async (entity: DeliveryDomain) => {
        return await this._.save(entity)
    }

    list = async () => {
        return await this._.find(DeliveryORM)
    }

    findById = async (id: string) => {
        return await this._.findOne({
            where: {
                id
            },
            relations: {
                files: true,
                requirements: true,
                projectMember: true
            }
        })
    }

    update = async (entity: DeliveryORM) => {
        return await this._.save(entity)
    }

}

