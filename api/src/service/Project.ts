import ProjectDomain from "../domain/Project"
import { ProjectORM } from "../entity/Project"
import { ProjectRepository } from "../repository/Project"

export class ProjectService {
    private _: ProjectRepository

    constructor(repo: ProjectRepository) {
        this._ = repo
    }

    create = async (entity: ProjectDomain) => {
        try {
            const project = await this._.create(entity)

            return {
                message: "Projeto cadastrado com sucesso!",
                data: project,
                statusCode: 201,
            };

        } catch (error) {
            return {
                message: error.message,
                error: error.code,
                statusCode: 400
            }
        }
    }

    getOne = async (id: string) => {
        try {
            return await this._.findById(id)
        } catch (error) {
            return {
                message: error.message,
                error: error.code,
                statusCode: 400
            }
        }
    }

    list = async () => {
        try {
            return await this._.list()

        } catch (error) {
            return {
                message: error.message,
                error: error.code,
                statusCode: 400
            }
        }
    }

    update = async (id: string, entity: ProjectORM) => {
        try {
            const entityExists = await this._.findById(id)

            if (!entityExists) {
                return {
                    message: "Não foi possivel encontrar o projeto",
                    statusCode: 200
                }
            }

            for (const [key, value] of Object.entries(entity)) {
                entityExists[key] = value
            }

            await this._.update(entityExists)

            return {
                message: "Dados atualizados com sucesso",
                statusCode: 200
            }
        } catch (error) {
            return {
                message: error.message,
                error: error.code,
                statusCode: 400
            }
        }
    }

    remove = async (_id: string) => {
        try {

            await this._.remove(_id)

            return {
                message: "Dados removidos com sucesso",
                statusCode: 200
            }
        } catch (error) {
            return {
                message: error.message,
                error: error.code,
                statusCode: 400
            }
        }

    }
}