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

    create =  async (entity: DeliveryDomain) => {
        try {
<<<<<<< HEAD
<<<<<<< HEAD
                const delivery = await this._.create(entity)

                entity.files?.map(async (file: IFile) => {                
                    const fileToRegister = {
                        ...file, 
                        delivery: {
                            id: delivery.id
                        }
=======
=======
>>>>>>> a7c3be84ee24b0b6588cbf9410a3a70b136c73ce
            const delivery = await this._.create(entity)

            entity.files?.map(async (file: IFile) => {
                const fileToRegister = {
                    ...file,
                    delivery: {
                        id: delivery.id
<<<<<<< HEAD
>>>>>>> 12fe4e6c757459782848a1d54d1210ca617d6403
=======
=======
                const delivery = await this._.create(entity)

                entity.files?.map(async (file: IFile) => {                
                    const fileToRegister = {
                        ...file, 
                        delivery: {
                            id: delivery.id
                        }
>>>>>>> 0fd725cd510f024f503dea23cb770866887d72be
>>>>>>> a7c3be84ee24b0b6588cbf9410a3a70b136c73ce
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
                        message: "Não é possivel realizar uma entrega caso você não esteja ativo no projeto",
                        statusCode: 200,
                    };

                } else {
                    return {
                        message: "Entrega cadastrada com sucesso!",
                        data: delivery,
                        statusCode: 201,
                    };
                }
<<<<<<< HEAD
<<<<<<< HEAD

            
=======
=======
>>>>>>> a7c3be84ee24b0b6588cbf9410a3a70b136c73ce
                await this.deliveryFileRepository.create(fileToRegister)
            })

            const freelancerId = delivery.user.id
            const freelancer = await this.userRepository.findById(freelancerId)
            const projectMember = await this.projectMemberRepository.findById(freelancer.project_member.id)
            const teamProjectManagement = await this.teamProjectManagementRepository.getById(freelancer.teams.id)

            if (!freelancer.is_active === true && !projectMember.is_active === true && !teamProjectManagement.is_active === true) {

                await this._.delete(delivery.id)

                return {
                    message: "Não é possivel realizar uma entrega caso você não esteja ativo no projeto",
                    statusCode: 200,
                };

            } else {
                return {
                    message: "Entrega cadastrada com sucesso!",
                    data: delivery,
                    statusCode: 201,
                };
            }


<<<<<<< HEAD
>>>>>>> 12fe4e6c757459782848a1d54d1210ca617d6403
=======
=======

            
>>>>>>> 0fd725cd510f024f503dea23cb770866887d72be
>>>>>>> a7c3be84ee24b0b6588cbf9410a3a70b136c73ce
        } catch (error) {
            return {
                message: "Não foi possível cadastrar essa entrega!",
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
            const requirements = await this.projectRequirementsRepository.findById(delivery.requirements[0].id)

            if (delivery.is_active === false) {
                return {
                    message: "Não é possivel aceitar uma entrega inativa",
                    statusCode: 200
                };
            }

            delivery.is_accepted = true;
            const uptadedDelivery = await this._.update(delivery);


            delivery.requirements.map(async (requirement: any) => {
                requirement.is_delivered = true
                await this.projectRequirementsRepository.update(requirement);
            });

            const project = await this.projectRepository.getById(requirements.project.id);
            console.log(project.requirements);


            project.requirements.map(async (requirement: any) => {
                console.log(requirement.is_delivered)
                if (requirement.is_delivered === false || requirement.is_delivered === null) {
                    project.status = "IN_EXECUTION";
                    project.is_active = true
                    await this.projectRepository.update(project);
                } else {
                    project.status = "COMPLETE";
                    project.is_active = false;
                    await this.projectRepository.update(project);
                }
            });

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
                    message: "Não é possivel recusar uma entrega inativa",
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