import ProjectRequirementsDomain from "../domain/ProjectRequirements";
import { ProjectRequirementsORM } from "../entity/ProjectRequirements";
import { ProjectRequirementsRepository } from "../repository/ProjectRequirements";
import { ProjectRepository } from "../repository/Project";

interface IProject {
    url: string
}

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

}