import ProjectDomain from "../domain/Project";
import { ProjectORM } from "../entity/Project";
import { FreelancerRepository } from "../repository/Freelancer";
import { InterestRepository } from "../repository/Interest";
import { MemberRepository } from "../repository/Member";
import { ProjectRepository } from "../repository/Project";
import { ProjectAttachmentRepository } from "../repository/ProjectAtachment";
import { ProjectImageRepository } from "../repository/ProjectImage";

interface IImage {
    url: string
}
interface IAttachment {
    url: string
}

interface IRegisterInterest {
    freelancerId: string
}

export class ProjectService {
    private _: ProjectRepository
    private projectImageRepository: ProjectImageRepository
    private projectAttachmentRepository: ProjectAttachmentRepository
    private freelancerRepository: FreelancerRepository
    private interestRepository: InterestRepository
    private memberRepository: MemberRepository

    constructor(repo: ProjectRepository) {
        this._ = repo
        this.projectImageRepository = new ProjectImageRepository()
        this.projectAttachmentRepository = new ProjectAttachmentRepository()
        this.freelancerRepository = new FreelancerRepository()
        this.interestRepository = new InterestRepository()
        this.memberRepository = new MemberRepository()
    }

    create = async (entity: ProjectDomain) => {
        try {
            const project = await this._.create(entity)


            entity.images?.map(async (image: IImage) => {
                const imageToRegister = {
                    ...image, project: {
                        id: project.id
                    }
                }
                await this.projectImageRepository.create(imageToRegister)
            })

            entity.attachments?.map(async (attachment: IAttachment) => {
                const attachmentToRegister = {
                    ...attachment, project: {
                        id: project.id
                    }
                }
                await this.projectAttachmentRepository.create(attachmentToRegister)
            })

            return {
                message: "Projeto cadastrado com sucesso!",
                data: project,
                statusCode: 201,
            };
        } catch (error) {
            return {
                message: "Não foi possivel cadastrar o projeto!",
                error: error,
                statusCode: 200,
            };
        }

    }

    list = async () => {
        try {
            const projects = await this._.list()

            return {
                message: "projetos listados com sucesso",
                data: projects,
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
        const project = await this._.getById(id)

        if (project) {
            return {
                message: "projeto encontrado com sucesso",
                data: project,
                statusCode: 200,
            };
        } else {
            return {
                message: "Não foi possivel encontrar o projeto",
                statusCode: 200,
            };
        }

    }

    update = async (id: string, entity: ProjectORM) => {
        try {

            const project = await this._.getById(id)

            if (!project) {
                return {
                    message: "Não foi possivel encontrar o projeto",
                    statusCode: 200
                };
            }

            for (const [key, value] of Object.entries(entity)) {
                project[key] = value;
            }

            const projectUpdated = await this._.update(project)

            return {
                message: "Dados atualizados com sucesso",
                data: projectUpdated,
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
            const project = await this._.getById(id);

            if (!project) {
                return {
                    message: "Não foi possivel encontrar o usuário",
                    statusCode: 200
                };
            }

            project.is_active = false;

            await this._.update(project);

            return {
                message: "Projeto desabilitado com sucesso",
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

    registerInterest = async (projectId: string, details: IRegisterInterest) => {
        const freelancer = await this.freelancerRepository.findById(details.freelancerId)
        const project = await this.getById(projectId)

        if (!freelancer) {
            return {
                message: "Usuário inválido",
                statusCode: 200
            };
        }

        if (project.data.interest.find((interest) => interest.team.id === freelancer.id)) {
            return {
                message: "O usuário já declarou interesse para esse projeto",
                statusCode: 200
            };
        }

        let interestToRegister = {
            team: {
                id: freelancer.id
            },
            project: {
                id: projectId
            },
            all_members_accept: true
        }

        if (freelancer.is_freelancer) {
            const interest = await this.interestRepository.create(interestToRegister)

            const memberToRegister = {

                accept: true,
                user: {
                    id: freelancer.id
                },
                interest: {
                    id: interest.id
                }

            }

            await this.memberRepository.create(memberToRegister)

            return {
                message: "Interesse registrado com sucesso",
                statusCode: 200
            };

        } else {
            interestToRegister.all_members_accept = false
            return {
                message: "Função de times não implementada",
                statusCode: 200
            };
        }
    }

    selectFreelancer = async (projectId: string, body: { freelancerId: string }) => {

        const project = await this.getById(projectId)

        // cosnt freelancer = await this.

        const interest = project.data.interest.find((interest) => body.freelancerId === interest.team.id)


        interest.members.map(async (member: any) => {
            member.is_selected === true
            await this.memberRepository.update(member)
        })


        return {
            message: "Função de times não continue",
            interest: interest,
            memberId: interest.members,
            statusCode: 200

        };

    }

}