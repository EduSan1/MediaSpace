import DeliveryDomain from "../domain/Delivery";
import { DeliveryORM } from "../entity/Delivery";
import { ProjectRepository } from "../repository/Project";
import { ProjectRequirementsRepository } from "../repository/ProjectRequirements";
import { DeliveryRepository } from "../repository/Delivery";
import { DeliveryFileRepository } from "../repository/DeliveryFile";
import { UserRepository } from "../repository/User";
import { ProjectMemberRepository } from "../repository/ProjectMember"
import { TeamProjectManagementRepository } from "../repository/TeamProjectManagement";

interface IFile {
    url: string
}

export class DeliveryService {
    private _: DeliveryRepository
    private deliveryFileRepository: DeliveryFileRepository
    private projectRepository: ProjectRepository
    private projectRequirementsRepository: ProjectRequirementsRepository
    private userRepository: UserRepository
    private projectMemberRepository: ProjectMemberRepository
    private teamProjectManagementRepository: TeamProjectManagementRepository

    constructor(repo: DeliveryRepository) {
        this._ = repo
        this.deliveryFileRepository = new DeliveryFileRepository()
        this.projectRepository = new ProjectRepository()
        this.projectRequirementsRepository = new ProjectRequirementsRepository()
        this.userRepository = new UserRepository()
        this.projectMemberRepository = new ProjectMemberRepository()
        this.teamProjectManagementRepository = new TeamProjectManagementRepository()
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

            const freelancerId = delivery.user.id
            const freelancer = await this.userRepository.findById(freelancerId)
            const projectMember = await this.projectMemberRepository.findById(freelancer.project_member.id)
            const teamProjectManagement = await this.teamProjectManagementRepository.getById(freelancer.teams.id)

            if (!freelancer.is_active === true && !projectMember.is_active === true && !teamProjectManagement.is_active === true) {

                await this._.delete(delivery.id)

                return {
                    message: "N??o ?? possivel realizar uma entrega caso voc?? n??o esteja ativo no projeto",
                    statusCode: 200,
                };

            } else {
                return {
                    message: "Entrega cadastrada com sucesso!",
                    data: delivery,
                    statusCode: 201,
                };
            }


        } catch (error) {
            return {
                message: "N??o foi poss??vel cadastrar essa entrega!",
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
                message: "N??o foi possivel encontrar a entrega",
                statusCode: 200,
            };
        }

    }

    accept = async (id: string) => {
        try {

            const delivery = await this._.findById(id);
            console.log(id)
            const requirements = await this.projectRequirementsRepository.findById(delivery.requirements[0].id)

            if (delivery.is_active === false) {
                return {
                    message: "N??o ?? possivel aceitar uma entrega inativa",
                    statusCode: 200
                };
            }

            delivery.is_accepted = true;
            const uptadedDelivery = await this._.update(delivery);


            await delivery.requirements.map(async (requirement: any) => {
                requirement.is_delivered = true
                await this.projectRequirementsRepository.update(requirement);
            });


            await this.finishProject(requirements.project.id, delivery.requirements[0].id)

            return {
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
                    message: "N??o ?? possivel recusar uma entrega inativa",
                    statusCode: 200
                };
            }

            delivery.is_accepted = false
            delivery.is_active = false
            const uptadedDelivery = await this._.update(delivery)

            delivery.requirements.map(async (requirement: any) => {
                requirement.is_delivered = false
                await this.projectRequirementsRepository.update(requirement);
            });

            return {
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

    finishProject = async (projectId: string, atualRequerimentId: string) => {
        const project = await this.projectRepository.getById(projectId);
        console.log(project.requirements)
        console.log(projectId)
        console.log(atualRequerimentId)


        console.log("size ", project.requirements.filter((requirement: any) => requirement.is_active === true && requirement.is_delivered === true || requirement.is_active === true && requirement.id === atualRequerimentId).length)

        const isFinish = project.requirements.filter((requirement: any) => requirement.is_active === true && requirement.is_delivered === true || requirement.is_active === true && requirement.id === atualRequerimentId).length === project.requirements.filter((requirement: any) => requirement.is_active === true).length

        console.log(isFinish)
        // project.requirements.map(async (requirement: any) => {
        //     if (requirement.is_active) {

        //         console.log("requisito => ", requirement.title);
        //         console.log("requisito id => ", requirement.id);
        //         console.log("requisito ativo? => ", requirement.is_active);
        //         console.log("requisito is_delivered  => ", requirement.is_delivered);


        //         if (requirement.is_delivered === false || requirement.is_delivered === null || requirement.id !== atualRequerimentId) {
        //             // project.status = "IN_EXECUTION";
        //             // project.is_active = true
        //             // await this.projectRepository.update(project);
        //         } else {
        //             project.status = "COMPLETE";
        //             project.is_active = false;
        //             await this.projectRepository.update(project);
        //         }
        //     }
        // });

        project.status = "COMPLETE";
        project.is_active = false;
        isFinish &&
            await this.projectRepository.update(project);


    }



    disable = async (id: string) => {
        try {
            const delivery = await this._.findById(id);

            if (!delivery) {
                return {
                    message: "N??o foi possivel encontrar a entrega",
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