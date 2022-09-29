import { CategoryRepository } from "../repository/Category"
import { Request, Response } from "express";
import { CategoryService } from "../service/Category"
import CategoryDomain from "../domain/Category";

export class CategoryController {
    private repository : CategoryRepository
    private service : CategoryService

    constructor() {
        this.repository = new CategoryRepository(),
        this.service = new CategoryService(this.repository)
    }

    getAll = (request: Request, response: Response) => {
        this.service.list().then((res) => {
            response.status(res.statusCode || 200).json(res)
        })
        .catch(err => response.status(400).send(err.message || "Ocorreu um erro ao listar as categorias"))
    }

    getByID = (request: Request, response: Response) => {
        this.service.getById(request.params.categoryId).then((res) => {
            response.status(res.statusCode || 200).json(res)
        })
        .catch(err => response.status(400).send(err.message || "Ocorreu um erro ao listar a categoria"))
    }

    create = (request: Request, response: Response) => {
        this.service.create( new CategoryDomain(request.body)).then((res) => {
            response.json(res)
        })
        .catch(error => response.status(400).send({error : error.message, statusCode: error.status} || "Ocorreu um erro ao criar a categoria"))
    }

    update = (request: Request, response: Response) => {
        this.service.update(request.params.categoryId, request.body).then((res) => {
            response.status(res.statusCode || 200).json(res)
        })
        .catch(err => response.status(400).send(err.message || "Ocorreu um erro ao atualizar a categoria"))
     }

     disable = (request: Request, response: Response) => {
        this.service.disable(request.params.categoryId).then((res) => {
            response.status(res.statusCode || 200).json(res)
        })
        .catch(err => response.status(400).send(err.message || "Ocorreu um erro ao desativar a categoria"))
  }
}