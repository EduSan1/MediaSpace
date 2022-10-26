import { Request, Response } from "express"
import { ProjectRepository } from "../repository/Project"
import { ProjectService } from "../service/Project"
import { ProjectORM } from "../entity/Project"

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
            .catch(err => response.status(400).send(err.message || "Ocorreu um erro ao criar os projetos"))
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

    update = (request: Request, response: Response) => {
        this.service.update(request.params.projectId, request.body).then((res) => {
            response.status(res.statusCode || 200).json(res)
        })
            .catch(err => response.status(400).send(err.message || "Ocorreu um erro ao atualizar o projeto"))
    }

    disable = (request: Request, response: Response) => {
        this.service.disable(request.params.projectId).then((res) => {
            response.status(res.statusCode || 200).json(res)
        })
            .catch(err => response.status(400).send(err.message || "Ocorreu um erro ao apagar o projeto"))
    }

    registerInterest = (request: Request, response: Response) => {
        this.service.registerInterest(request.params.projectId, request.body).then((res) => {
            response.status(res.statusCode || 200).json(res)
        })
            .catch(err => response.status(400).send(err.message || "Ocorreu um erro ao declarar interesse no projeto"))
    }

    selectFreelancer = (request: Request, response: Response) => {
        this.service.selectFreelancer(request.params.projectId, request.body).then((res) => {
            response.status(res.statusCode || 200).json(res)
        })
            .catch(err => response.status(400).send(err.message || "Ocorreu um erro ao selecionar o freelancer projeto"))
    }

     acceptRequirements = (request: Request, response: Response) => {
         this.service.acceptRequirements(request.params.projectId).then((res) => {
             response.status(res.statusCode || 200).json(res)
         })
             .catch(err => response.status(400).send(err.message || "Ocorreu um erro ao aceitar o projeto"))
    }

    denyRequirements = (request: Request, response: Response) => {
        this.service.denyRequirements(request.params.projectId).then((res) => {
            response.status(res.statusCode || 200).json(res)
        })
            .catch(err => response.status(400).send(err.message || "Ocorreu um erro ao recusar o projeto"))
    }

}