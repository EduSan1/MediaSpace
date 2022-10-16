import { Request, Response } from "express"
import { ProjectRepository } from "../repository/Project"
import { ProjectService } from "../service/Project"

export class ProjectController {
    private repository: ProjectRepository
    private service: ProjectService

    constructor() {
        this.repository = new ProjectRepository(),
            this.service = new ProjectService(this.repository)
    }

    create = (request: Request, response: Response) => {

        this.service.create(request.body).then((res) => {
            response.status(res.statusCode || 200).json(res)
        })
            .catch(err => response.status(400).send(err.message || "Ocorreu um erro ao listar os projetos"))
    }

    getAll = (request: Request, response: Response) => {
        this.service.list().then((res) => {
            response.status(res.statusCode || 200).json(res)
        })
            .catch(err => response.status(400).send(err.message || "Ocorreu um erro ao listar os projetos"))
    }

    getById = (request: Request, response: Response) => {
        this.service.getById(request.params.projectId).then((res) => {
            response.status(res.statusCode || 200).json(res)
        })
            .catch(err => response.status(400).send(err.message || "Ocorreu um erro ao listar o projeto"))
    }
}