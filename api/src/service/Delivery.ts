import DeliveryDomain from "../domain/Delivery";
import { DeliveryORM } from "../entity/Delivery";
import { ProjectRepository } from "../repository/Project";
import { ProjectRequirementsRepository } from "../repository/ProjectRequirements";
import { DeliveryRepository } from "../repository/Delivery";
import { DeliveryFileRepository } from "../repository/DeliveryFile";

interface IFile {
    url: string
}

export class DeliveryService {
    private _: DeliveryRepository
    private deliveryFileRepository: DeliveryFileRepository
    private projectRepository: ProjectRepository
    private projectRequirementsRepository: ProjectRequirementsRepository

    constructor(repo: DeliveryRepository) {
        this._ = repo
        this.deliveryFileRepository = new DeliveryFileRepository()
        this.projectRepository = new ProjectRepository()
        this.projectRequirementsRepository = new ProjectRequirementsRepository()
    }

    create = async (entity: DeliveryDomain) => {
        try {
            
            const delivery = await this._.create(entity)

            entity.files?.map(async (file: IFile) => {                
                const fileToRegister = {
                    ...file, 
                    delivery: {
                        id: delivery.id
                    }
                }
                await this.deliveryFileRepository.create(fileToRegister)
            })
    
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

    list = async () => {
        try {
            const delivery = await this._.list()

            return {
                message: "entrega listados com sucesso",
                data: delivery,
                statusCode: 200,
            };
        } catch (error) {
            return {
                message: error.message,
                error: error.code,
                statusCode: 400,
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
            const requirements = await this.projectRequirementsRepository.findById(delivery.requirements.id)
            const project = await this.projectRepository.getById(requirements.project.id);

            if (delivery.is_active === false) {
                return {
                    message: "Não é possivel aceitar uma entrega inativa",
                    statusCode: 200
                };
            }

            delivery.is_accepted = true;
            const uptadedDelivery = await this._.update(delivery);

            delivery.requirements.map(async (requirement : any) => {
                requirement.is_delivered = true
                await this.projectRequirementsRepository.update(requirement);
            });

            project.requirements.map(async (requirement : any) => {
                if (requirement.is_delivered === false || requirement.is_delivered === null) {
                    project.status = "IN_EXECUTION";
                    project.is_active = true
                    await this.projectRepository.update(project);
                } else {
                    project.status = "COMPLETE";
                    project.is_active = false
                    await this.projectRepository.update(project);
                }
            });

            return{
                message: "Entrega aceita",
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

            delivery.requirements.map(async (requirement : any) => {
                requirement.is_delivered = false
                await this.projectRequirementsRepository.update(requirement);
            });

            return{
                message: "Entrega recusada",
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