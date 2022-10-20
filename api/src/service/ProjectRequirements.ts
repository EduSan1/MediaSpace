import ProjectRequirementsDomain from "../domain/ProjectRequirements";
import { ProjectRequirementsORM } from "../entity/ProjectRequirements";
import { ProjectRequirementsRepository } from "../repository/ProjectRequirements";
import { ProjectRepository } from "../repository/Project";

export class ProjectRequirementsService {
    private _: ProjectRequirementsRepository
    private projectRepository: ProjectRepository

    constructor(repo: ProjectRequirementsRepository) {
        this._ = repo
        this.projectRepository = new ProjectRepository()
    }

    create = async (entity: ProjectRequirementsDomain) => {
        try {
            const projectRequirements = await this._.create(entity)

            return {
                message: "Requisito cadastrado com sucesso!",
                data: projectRequirements,
                statusCode: 201,
            };
        } catch (error) {
            return {
                message: "Não foi possível cadastrar o requisito!",
                error: error,
                statusCode: 200,
            };
        }
    }

    list = async () => {
        try {
            const projectRequirements = await this._.list()

            return {
                message: "requisitos listados com sucesso",
                data: projectRequirements,
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
        const projectRequirement = await this._.findById(id)

        if (projectRequirement) {
            return {
                message: "requisito encontrado com sucesso",
                data: projectRequirement,
                statusCode: 200,
            };
        } else {
            return {
                message: "Não foi possivel encontrar o requisito",
                statusCode: 200,
            };
        }

    }



}