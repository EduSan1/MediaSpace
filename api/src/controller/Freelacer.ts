import { Request, Response } from "express";
import { TeamDomain } from "../domain/Team";
import { TeamRepository } from "../repository/Freelancer";
import { TeamService } from "../service/Freelancer";

export class TeamController {
    private repository : TeamRepository
    private service : TeamService

    constructor() {
        this.repository = new TeamRepository(),
        this.service = new TeamService(this.repository)
    }
    getAll = (request: Request, response: Response) => {
        this.service.list().then((res) => {
            response.status(res.statusCode || 200).json(res)
        })
        .catch(err => response.status(400).send(err.message || "Ocorreu um erro ao listar os times"))
    }

    getByID = (request: Request, response: Response) => {
        this.service.getById(request.params.freelancerId).then((res) => {
            response.status(res.statusCode || 200).json(res)
        })
        .catch(err => response.status(400).send(err.message || "Ocorreu um erro ao listar o time"))
    }

    create = (request: Request, response: Response) => {
        this.service.createFreelancer(request.body).then((res) => {
            response.json(res)
        })
        .catch(error => response.status(400).send({error : error.message, statusCode: error.status} || "Ocorreu um erro ao criar o time"))
    }

    update = (request: Request, response: Response) => {
        this.service.update(request.params.freelancerId, request.body).then((res) => {
            response.status(res.statusCode || 200).json(res)
        })
        .catch(err => response.status(400).send(err.message || "Ocorreu um erro ao atualizar o time"))
     }

     disable = (request: Request, response: Response) => {
        this.service.disable(request.params.freelancerId).then((res) => {
            response.status(res.statusCode || 200).json(res)
        })
        .catch(err => response.status(400).send(err.message || "Ocorreu um erro ao desativar o time"))
  }
}