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
import { IDomainProjectProps } from "../interface/Project";

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
                if (image.url !== "https://firebasestorage.googleapis.com/v0/b/mediaspace-35054.appspot.com/o/system%2FbaseProjectImage.png?alt=media&token=b270e971-908f-4e2e-8250-fd36fb1f496f") {
                    const imageToRegister = {
                        ...image,
                        project: {
                            id: project.id
                        }
                    }
                    await this.projectImageRepository.create(imageToRegister)

                }
            })



            return {
                message: "Projeto cadastrado com sucesso!",
                data: project,
                statusCode: 201,
            };
        } catch (error) {
            return {
                message: "N??o foi possivel cadastrar o projeto!",
                error: error,
                statusCode: 200,
            };
        }

    }

    list = async (query: any) => {
        try {
            let response = null
            if (query.take !== undefined) {
                const categories = query.categories.split(",")
                const projects = await this._.listPerPage(query.take, (query.page - 1) * query.take, query.search, categories[0] === "" ? [] : categories)

                response = {
                    page: query.page,
                    numberOfPages: Math.ceil((projects[projects.length - 1] / query.take)),
                    count: projects[projects.length - 1],
                    data: projects
                }

            } else {
                response = await this._.list()

            }

            return {
                message: "projetos listados com sucesso",
                data: response,
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
                message: "N??o foi possivel encontrar o projeto",
                statusCode: 200,
            };
        }

    }

    update = async (id: string, entity: ProjectORM) => {
        try {

            const project = await this._.getById(id)

            if (!project) {
                return {
                    message: "N??o foi possivel encontrar o projeto",
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
                    message: "N??o foi possivel encontrar o usu??rio",
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
                message: "Usu??rio inv??lido",
                statusCode: 200
            };
        }

        if (project.data.interest.find((interest) => interest.team.id === freelancer.id)) {
            return {
                message: "O usu??rio j?? declarou interesse para esse projeto",
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
                message: "Fun????o de times n??o implementada",
                statusCode: 200
            };
        }
    }

    selectFreelancer = async (projectId: string, body: { freelancerId: string }) => {
        const project = await this.getById(projectId)
        // console.log(body.freelancerId)
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
            payment_type: "Cart??o de cr??dito"
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
                    message: "N??o ?? possivel aceitar os requisitos de um projeto inativo",
                    statusCode: 200
                };
            }

            project.requirements.map(async (requirement: any) => {
                if (requirement.is_active === true) {
                    requirement.is_accepted = true
                    await this.projectRequirementRepository.update(requirement)
                }
            });

            project.status = "IN_EXECUTION";
            await this._.update(project)

            return {
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
                    message: "N??o ?? possivel recusar os requisitos de um projeto inativo",
                    statusCode: 200
                };
            }

            project.requirements.map(async (requirement: any) => {
                if (requirement.is_active === true) {
                    // await this.projectRequirementRepository.delete(requirement)

                    requirement.is_accepted = false
                    requirement.is_active = false
                    await this.projectRequirementRepository.update(requirement)
                }
            });

            return {
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

    getAllUserProjects = async (userId: string) => {
        try {
            const projects = await this._.listWhere("user", { id: userId })
            const userProjects = {
                AWAITING_START: projects.filter((project: IDomainProjectProps) => project.status === "AWAITING_START"),
                VALIDATING_REQUIREMENTS: projects.filter((project: IDomainProjectProps) => project.status === "VALIDATING_REQUIREMENTS"),
                IN_EXECUTION: projects.filter((project: IDomainProjectProps) => project.status === "IN_EXECUTION"),
                COMPLETE: projects.filter((project: IDomainProjectProps) => project.status === "COMPLETE"),
                CANCELED: projects.filter((project: IDomainProjectProps) => project.status === "CANCELED")
            }

            return {
                message: "Projetos listados com sucesso",
                data: userProjects,
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

    getAllFreelancerProjects = async (freelancerId: string) => {
        try {
            const teamManagement = await this.teamProjectManagementRepository.getAllByFreelancerId(freelancerId)

            const projects = teamManagement.map((teamManagement: any) => teamManagement.projectManagement.project)

            const freelancerProjects = {
                VALIDATING_REQUIREMENTS: projects.filter((project: IDomainProjectProps) => project.status === "VALIDATING_REQUIREMENTS"),
                IN_EXECUTION: projects.filter((project: IDomainProjectProps) => project.status === "IN_EXECUTION"),
                COMPLETE: projects.filter((project: IDomainProjectProps) => project.status === "COMPLETE"),
                CANCELED: projects.filter((project: IDomainProjectProps) => project.status === "CANCELED")
            }
            return {
                message: "Projetos listados com sucesso",
                data: freelancerProjects,
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

