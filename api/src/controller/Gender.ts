import { GenderORM } from "../entity/Gender";
import { genderRepository } from "../repository/Gender"
import { Request, Response } from "express";
import { GenderService } from "../service/Gender";
import GenderDomain from "../domain/Gender";

export class GenderController {

    private repository : any
    private service    : any

    constructor() {
        this.repository = new genderRepository(),
        this.service = new GenderService(this.repository)
    }

    getAll = (request: Request, response: Response) => {
        this.service.list().then((res) => {
            response.json(res)
        })
        .catch(err => response.status(400).send(err.message || "Ocorreu um erro ao listar os gêneros"))
    }

    getByID = (request: Request, response: Response) => {
        this.service.getOne(request.params.genderId).then((res) => {
            response.json(res)
        })
        .catch(err => response.status(400).send(err.message || "Ocorreu um erro ao listar o gênero"))
    }

    create = (request: Request, response: Response) => {
        this.service.create(new GenderDomain(request.body)).then((res) => {
            response.json(res)
        })
        .catch(err => response.status(400).send(err.message || "Ocorreu um erro ao criar o gênero"))
    }

    update = async (request: Request, response: Response) => {
        this.service.update(request.params.genderId, request.body).then((res) => {
            response.json(res)
        })
        .catch(err => response.status(400).send(err.message || "Ocorreu um erro ao atualizar o gênero"))
    }

    delete = (request: Request, response: Response) => {
        this.service.remove(request.params.genderId).then((res) => {
            response.json(res)
        })
        .catch(err => response.status(400).send(err.message || "Ocorreu um erro ao apagar o gênero"))
    }

}

