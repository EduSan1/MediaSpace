import { userRepository } from "../repository/User"
import { Request, Response } from "express";
import { UserService } from "../service/User";
import UserDomain from "../domain/User";

export class UserController {

    private repository : any
    private service    : any

    constructor() {
        this.repository = new userRepository(),
        this.service = new UserService(this.repository)
    }

    getAll = (request: Request, response: Response) => {
        this.service.list().then((res) => {
            response.json(res)
        })
        .catch(err => response.status(400).send(err.message || "Ocorreu um erro ao listar os usuários"))
   
    }

    getByID = (request: Request, response: Response) => {
        this.service.getOne(request.params.userId).then((res) => {
            response.json(res)
        })
        .catch(err => response.status(400).send(err.message || "Ocorreu um erro ao listar o usuário"))
    }

    create = (request: Request, response: Response) => {
        this.service.create(new UserDomain(request.body)).then((res) => {
            response.json(res)
        })
        .catch(err => response.status(400).send(err.message || "Ocorreu um erro ao criar o usuário"))
     }

    update = (request: Request, response: Response) => {
        this.service.update(request.params.userId, request.body).then((res) => {
            response.json(res)
        })
        .catch(err => response.status(400).send(err.message || "Ocorreu um erro ao atualizar o usuário"))
     }

    delete = (request: Request, response: Response) => {
        this.service.remove(request.params.userId).then((res) => {
            response.json(res)
        })
        .catch(err => response.status(400).send(err.message || "Ocorreu um erro ao apagar o usuário"))
  }

}

