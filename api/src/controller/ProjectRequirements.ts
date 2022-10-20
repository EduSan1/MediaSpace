import { ProjectRequirementsRepository  } from "../repository/ProjectRequirements"
import { Request, Response              } from "express";
import { ProjectRequirementsService     } from "../service/ProjectRequirements";
import ProjectRequirementsDomain          from "../domain/ProjectRequirements";

export class ProjectRequirementsController {

    private repository: ProjectRequirementsRepository
    private service: ProjectRequirementsService

    constructor() {
        this.repository = new ProjectRequirementsRepository(),
        this.service = new ProjectRequirementsService(this.repository)
    }

    create = (request: Request, response: Response) => {

        this.service.create(request.body).then((res) => {
            response.status(res.statusCode || 200).json(res)
        })
            .catch(err => response.status(400).send(err.message || "Ocorreu um erro ao criar os requisitos"))

    }

    getAll = (request: Request, response: Response) => {
        this.service.list().then((res) => {
            response.status(res.statusCode || 200).json(res)
        })
            .catch(err => response.status(400).send(err.message || "Ocorreu um erro ao listar os requisitos"))
    }

    getById = (request: Request, response: Response) => {
        this.service.getById(request.params.projectRequirementId).then((res) => {
            response.status(res.statusCode || 200).json(res)
        })
            .catch(err => response.status(400).send(err.message || "Ocorreu um erro ao listar o requisito"))
    }

}