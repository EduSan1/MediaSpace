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

    update = async (id: string, entity: ProjectRequirementsORM) => {
        try {

            const projectRequirement = await this._.findById(id)

            if (!projectRequirement) {
                return {
                    message: "Não foi possivel encontrar o requisito",
                    statusCode: 200
                };
            }

            for (const [key, value] of Object.entries(entity)) {
                projectRequirement[key] = value;
            }

            const projectRequirementUpdated = await this._.update(projectRequirement)

            return {
                message: "Dados atualizados com sucesso",
                data: projectRequirementUpdated,
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
            const projectRequirement = await this._.findById(id);

            if (!projectRequirement) {
                return {
                    message: "Não foi possivel encontrar o requisito",
                    statusCode: 200
                };
            }

            projectRequirement.is_active = false;

            await this._.update(projectRequirement);

            return {
                message: "Requisito desabilitado com sucesso",
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

    accept = async (id: string) => {
        try {
            const projectRequirement = await this._.findById(id);

            if (projectRequirement.is_active == false) {
                return {
                    message: "Não é possivel aceitar um requisito inativo",
                    statusCode: 200
                };
            }

            projectRequirement.is_accepted = true;
            await this._.update(projectRequirement);

            return {
                message: "Requisito aceito com sucesso",
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
            const projectRequirement = await this._.findById(id);

            if (projectRequirement.is_active == false) {
                return {
                    message: "Não é possivel recusar um requisito inativo",
                    statusCode: 200
                };
            }

            projectRequirement.is_accepted = false;
            await this._.update(projectRequirement);

            return {
                message: "Requisito recusado com sucesso",
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