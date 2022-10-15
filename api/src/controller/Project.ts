import { ProjectORM } from "../entity/Project";
import { ProjectRepository } from "../repository/Project"
import { Request, Response } from "express";
import { ProjectService } from "../service/Project";
import ProjectDomain from "../domain/Project";

export class ProjectController {

    private repository: ProjectRepository
    private service: ProjectService

    constructor() {
        this.repository = new ProjectRepository(),
            this.service = new ProjectService(this.repository)
    }

    getAll = (request: Request, response: Response) => {
        this.service.list().then((res) => {
            response.json(res)
        })
            .catch(err => response.status(400).send(err.message || "Ocorreu um erro ao listar os projetos"))
    }

    getByID = (request: Request, response: Response) => {
        this.service.getOne(request.params.projectId).then((res) => {
            response.json(res)
        })
            .catch(err => response.status(400).send(err.message || "Ocorreu um erro ao listar o projeto"))
    }

    create = (request: Request, response: Response) => {
        console.log(request.body)
        this.service.create(new ProjectDomain(request.body)).then((res) => {
            response.json(res)
        })
            .catch(err => response.status(400).send({ error: err.message, statusCode: err.status } || "Ocorreu um erro ao criar o projeto"))
    }

    update = async (request: Request, response: Response) => {
        this.service.update(request.params.projectId, request.body).then((res) => {
            response.json(res)
        })
            .catch(err => response.status(400).send(err.message || "Ocorreu um erro ao atualizar o projeto"))
    }

    delete = (request: Request, response: Response) => {
        this.service.remove(request.params.projectId).then((res) => {
            response.json(res)
        })
            .catch(err => response.status(400).send(err.message || "Ocorreu um erro ao apagar o projeto"))
    }

}

