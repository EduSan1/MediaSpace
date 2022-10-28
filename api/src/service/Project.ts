import ProjectDomain from "../domain/Project";
import { InterestORM } from "../entity/Interest";
import { MemberORM } from "../entity/Member";
import { ProjectORM } from "../entity/Project";
import { ProjectManagementORM } from "../entity/ProjectManagement";
import { ProjectMemberORM } from "../entity/ProjectMember";
import { TeamProjectManagementORM } from "../entity/TeamProjectManagement";
import { FreelancerRepository } from "../repository/Freelancer";
import { InterestRepository } from "../repository/Interest";
import { MemberRepository } from "../repository/Member";
import { ProjectRepository } from "../repository/Project";
import { ProjectImageRepository } from "../repository/ProjectImage";
import { ProjectManagementRepository } from "../repository/ProjectManagement";
import { ProjectMemberRepository } from "../repository/ProjectMember";
import { TeamProjectManagementRepository } from "../repository/TeamProjectManagement";
import { ProjectRequirementsRepository } from "../repository/ProjectRequirements";

interface IImage {
    url: string
}

interface IRegisterInterest {
    freelancerId: string
}

export class ProjectService {
    private _: ProjectRepository
    private projectImageRepository: ProjectImageRepository
    private projectRequirementRepository: ProjectRequirementsRepository
    private freelancerRepository: FreelancerRepository
    private interestRepository: InterestRepository
    private memberRepository: MemberRepository
    private projectManagementRepository: ProjectManagementRepository
    private teamProjectManagementRepository: TeamProjectManagementRepository
    private projectMemberRepository: ProjectMemberRepository

    constructor(repo: ProjectRepository) {
        this._ = repo
        this.projectImageRepository = new ProjectImageRepository()
        this.projectRequirementRepository = new ProjectRequirementsRepository()
        this.freelancerRepository = new FreelancerRepository()
        this.interestRepository = new InterestRepository()
        this.memberRepository = new MemberRepository()
        this.projectManagementRepository = new ProjectManagementRepository()
        this.teamProjectManagementRepository = new TeamProjectManagementRepository()
        this.projectMemberRepository = new ProjectMemberRepository()
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

        const updatedProjectStatus = {
            ...project.data,
            status: "VALIDATING_REQUIREMENTS",
        }
        const updatedProject = await this._.update(updatedProjectStatus)


        // cosnt freelancer = await this.

        const interest: InterestORM = project.data.interest.find((interest) => body.freelancerId === interest.team.id)

        interest.members.map(async (member: MemberORM) => {
            member.is_selected = true
            return await this.memberRepository.update(member)

        })

        interest.is_selected = true
        const interests = await this.interestRepository.update(interest)

        let projectManagement: ProjectManagementORM

        if (project.data.management) {

            projectManagement = await this.projectManagementRepository.getById(project.data.management.id)

            projectManagement.team_project_management.map(async (team_project_management: TeamProjectManagementORM) => {
                team_project_management.is_active = false
                await this.teamProjectManagementRepository.update(team_project_management)

                const teamProjectManagement = await this.teamProjectManagementRepository.getById(team_project_management.id)

                teamProjectManagement.members.map(async (projectMember: ProjectMemberORM) => {
                    projectMember.is_active = false
                    await this.projectMemberRepository.update(projectMember)
                })
            })

        } else {

            projectManagement = await this.createProjectManagement(projectId)


        }
        const teamProjectManagement = await this.createTeamProjectManagement(projectManagement.id, body.freelancerId)

        interests.members.map(async (member: any) => {
            const user = await this.memberRepository.getById(member.id)
            return await this.createProjectMember(teamProjectManagement.id, user.user.id)
        }
        )

        return {
            message: "Prestador escolhido com sucesso",
            updateProject: updatedProject,
            statusCode: 200
        };


    }

    createProjectManagement = async (projectId: string) => {
        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);

        const projectManagementToSend = {
            payment_confirmed: true,
            payment_date: today.toISOString(),
            project: {
                id: projectId
            },
            payment_type: {
                id: "f8567c6d-3d54-421d-adcb-422fbd0a2804"
            }
        }

        return await this.projectManagementRepository.create(projectManagementToSend)
    }

    createTeamProjectManagement = async (projectManagementId: string, freelancerId: string) => {
        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);
        const teamProjectManagementToSend = {
            payment_confirmed: true,
            payment_date: today.toISOString(),
            team: {
                id: freelancerId
            },
            projectManagement: {
                id: projectManagementId
            }
        }

        return await this.teamProjectManagementRepository.create(teamProjectManagementToSend)
    }

    createProjectMember = async (teamProjectManagementID: string, userId: string) => {


        const projectMemberToSend = {
            member: {
                id: userId
            },
            teamProjectManagement: {
                id: teamProjectManagementID
            }
        }

        return await this.projectMemberRepository.create(projectMemberToSend)
    }

     acceptRequirements = async (id: string) => {
        try {

            const project = await this._.getById(id);

            if (project.is_active == false) {
                return {
                    message: "Não é possivel aceitar os requisitos de um projeto inativo",
                    statusCode: 200
                };
            }

            project.requirements.map(async (requirement : any) => {
                if (requirement.is_active === true) {
                    requirement.is_accepted = true
                    await this.projectRequirementRepository.update(requirement)
                }
            });

            project.status = "IN EXECUTION";
            await this._.update(project)

            return{
                message: "Requisitos aceitos",
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

    denyRequirements = async (id: string) => {
        try {

            const project = await this._.getById(id);

            if (project.is_active == false) {
                return {
                    message: "Não é possivel recusar os requisitos de um projeto inativo",
                    statusCode: 200
                };
            }

            project.requirements.map(async (requirement : any) => {
                if (requirement.is_active === true) {
                    requirement.is_accepted = false
                    await this.projectRequirementRepository.update(requirement)
                }
            });

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

}