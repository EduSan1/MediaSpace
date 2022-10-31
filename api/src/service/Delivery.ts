import DeliveryDomain from "../domain/Delivery";
import { DeliveryORM } from "../entity/Delivery";
import { ProjectRequirementsRepository } from "../repository/ProjectRequirements";
import { DeliveryRepository } from "../repository/Delivery";

export class DeliveryService {
    private _: DeliveryRepository
    private projectRequirementsRepository: ProjectRequirementsRepository

    constructor(repo: DeliveryRepository) {
        this._ = repo
        this.projectRequirementsRepository = new ProjectRequirementsRepository()
    }

    create = async (entity: DeliveryDomain) => {
        try {
            const delivery = await this._.create(entity)
    
            return {
                message: "Entrega cadastrada com sucesso!",
                data: delivery,
                statusCode: 201,
            };
        } catch (error) {
            return {
                message: "Não foi possível cadastrar a entrega!",
                error: error,
                statusCode: 200,
            };
        }
    }

    getById = async (id: string) => {
        const delivery = await this._.findById(id)

        if (delivery) {
            return {
                message: "entrega encontrada com sucesso",
                data: delivery,
                statusCode: 200,
            };
        } else {
            return {
                message: "Não foi possivel encontrar a entrega",
                statusCode: 200,
            };
        }

    }

    accept = async (id: string) => {
        try {

            const delivery = await this._.findById(id);

            if (delivery.is_active === false) {
                return {
                    message: "Não é possivel aceitar uma entrega inativa",
                    statusCode: 200
                };
            }

            delivery.is_accepted = true
            const uptadedDelivery = await this._.update(delivery)

            return{
                message: "Requisitos aceitos",
                data: uptadedDelivery,
                statusCode: 200
            };

        } catch (error) {
            return {
                message: error.message,
                error: error.code,
                statusCode: 200,
            };
        }

    }

    deny = async (id: string) => {
        try {

            const delivery = await this._.findById(id);

            if (delivery.is_active === false) {
                return {
                    message: "Não é possivel recusar uma entrega inativa",
                    statusCode: 200
                };
            }

            delivery.is_accepted = false
            delivery.is_active = false
            const uptadedDelivery = await this._.update(delivery)

            return{
                message: "Requisitos recusados",
                statusCode: 200
            };

        } catch (error) {
            return {
                message: error.message,
                error: error.code,
                statusCode: 200,
            };
        }

    }

    delete = async (_id: string) => {
        try {

            await this._.delete(_id)

            return {
                message: "Dados removidos com sucesso",
            }
        } catch (error) {
            return {
                message: error.message,
                error: error.code,
                statusCode : 400
            }
        }

    }

    disable = async (id: string) => {
        try {
            const delivery = await this._.findById(id);

            if (!delivery) {
                return {
                    message: "Não foi possivel encontrar a entrega",
                    statusCode: 200
                };
            }

            delivery.is_active = false;

            await this._.update(delivery);

            return {
                message: "Entrega desabilitada com sucesso",
                statusCode: 200
            };

        } catch (error) {
            return {
                message: error.message,
                error: error.code,
                statusCode: 200,
            };
        }
    }

}