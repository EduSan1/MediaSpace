import ProjectDomain from "../domain/Project";
import { ProjectRepository } from "../repository/Project";
import { ProjectAttachmentRepository } from "../repository/ProjectAtachment";
import { ProjectImageRepository } from "../repository/ProjectImage";

interface IImage {
    url: string
}
interface IAttachment {
    url: string
}

export class ProjectService {
    private _: ProjectRepository
    private projectImageRepository: ProjectImageRepository
    private projectAttachmentRepository: ProjectAttachmentRepository

    constructor(repo: ProjectRepository) {
        this._ = repo
        this.projectImageRepository = new ProjectImageRepository()
        this.projectAttachmentRepository = new ProjectAttachmentRepository()
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


}