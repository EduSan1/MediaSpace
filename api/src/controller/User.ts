import { UserRepository } from "../repository/User"
import { Request, Response } from "express";
import { UserService } from "../service/User";
import UserDomain from "../domain/User";

export class UserController {

    private repository : UserRepository
    private service    : UserService

    constructor() {
        this.repository = new UserRepository(),
        this.service = new UserService(this.repository)
    }

    getAll = (request: Request, response: Response) => {
        this.service.list(request.query).then((res) => {
            response.status(res.statusCode || 200).json(res)
        })
        .catch(err => response.status(400).send(err.message || "Ocorreu um erro ao listar os usuários"))
    }

    getByID = (request: Request, response: Response) => {
        this.service.getOne(request.params.userId).then((res) => {
            response.status(res.statusCode || 200).json(res)
        })
        .catch(err => response.status(400).send(err.message || "Ocorreu um erro ao listar o usuário"))
    }

    create = (request: Request, response: Response) => {
        this.service.create(new UserDomain(request.body)).then((res) => {
            response.status(res.statusCode || 200).json(res)
        })
        .catch(err => response.status(400).send(err.message || "Ocorreu um erro ao criar o usuário"))
     }

    update = (request: Request, response: Response) => {
        this.service.update(request.params.userId, request.body).then((res) => {
            response.status(res.statusCode || 200).json(res)
        })
        .catch(err => response.status(400).send(err.message || "Ocorreu um erro ao atualizar o usuário"))
     }

    login = (request : Request, response : Response) => {
        this.service.login(request.body.mail, request.body.password).then((res) => {
            response.status(res.statusCode || 200).json(res)
        })
        .catch(err => response.status(400).send(err.message || "Ocorreu um erro ao realizar o login o usuário"))
    }

    authentication = (request : Request, response : Response) => {
        this.service.authentication(request.params.userId).then((res) => {
            response.status(res.statusCode || 200).json(res)
        })
        .catch(err => response.status(400).send(err.message || "Ocorreu um erro ao realizar o login o usuário"))
    }

    recoverPassword = (request : Request, response : Response) => {
        this.service.recoverPassword(request.body.mail).then((res) => {
            response.status(res.statusCode || 200).json(res)
        })
    }

    disable = (request: Request, response: Response) => {
        this.service.disable(request.params.userId).then((res) => {
            response.status(res.statusCode || 200).json(res)
        })
        .catch(err => response.status(400).send(err.message || "Ocorreu um erro ao apagar o usuário"))
  }

}

